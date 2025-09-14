"use client";

import { useState, useEffect } from "react";
import {
    ChevronDown,
    ChevronUp,
    CheckCircle,
    Clock,
    BookOpen,
    Award,
    Shield,
    Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Course } from "@/lib/types";
import Confetti from "react-confetti";

interface MobileCheckoutSheetProps {
    course: Course;
    onCheckout: (courseId: string, total: number) => void;
    validateCoupon?: (code: string) => { valid: boolean; discount: number };
    manualOpen?: boolean;
}

const AVAILABLE_COUPONS = [
    { code: "SAVE10", discount: 10 },
    { code: "WELCOME50", discount: 50 },
    { code: "NEW20", discount: 20 },
];

export function MobileCheckoutSheet({
    course,
    onCheckout,
    validateCoupon,
    manualOpen,
}: MobileCheckoutSheetProps) {
    const [expanded, setExpanded] = useState(manualOpen ?? false);
    const [couponCode, setCouponCode] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (manualOpen !== undefined) {
            setExpanded(manualOpen); // sync when parent changes
        }
    }, [manualOpen]);

    // Ensure price is a number (parse if string)
    const coursePrice =
        typeof course.price === "string"
            ? parseFloat(course.price.replace(/[^0-9.]/g, ""))
            : course.price;

    const originalPrice =
        course.originalPrice &&
        (typeof course.originalPrice === "string"
            ? parseFloat(course.originalPrice.replace(/[^0-9.]/g, ""))
            : course.originalPrice);

    const finalPrice = Math.max(0, coursePrice - discountAmount);

    useEffect(() => {
        if (manualOpen !== undefined) {
            setExpanded(manualOpen);
        }
    }, [manualOpen]);

    const handleApplyCoupon = (code?: string) => {
        const codeToApply = code || couponCode;
        if (!validateCoupon) {
            // fallback: simple match with AVAILABLE_COUPONS
            const found = AVAILABLE_COUPONS.find((c) => c.code === codeToApply);
            if (found) {
                setAppliedCoupon(found.code);
                setDiscountAmount(found.discount);
                triggerConfetti();
            } else {
                setAppliedCoupon(null);
                setDiscountAmount(0);
            }
            return;
        }

        const result = validateCoupon(codeToApply);
        if (result.valid) {
            setAppliedCoupon(codeToApply);
            setDiscountAmount(result.discount);
            triggerConfetti();
        } else {
            setAppliedCoupon(null);
            setDiscountAmount(0);
        }
    };

    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2500);
    };

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
            {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
            <div
                className={`transition-all duration-500 ease-in-out bg-background border-t border-border shadow-lg rounded-t-2xl ${expanded ? "max-h-[85vh]" : "max-h-[80px]"
                    } overflow-hidden`}
            >
                {/* Header */}
                <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer border-b border-border"
                    onClick={() => setExpanded(!expanded)}
                >
                    <div>
                        <p className="text-lg font-bold text-foreground">₹{finalPrice}</p>
                        {originalPrice && (
                            <p className="text-xs text-muted-foreground line-through">
                                ₹{originalPrice}
                            </p>
                        )}
                    </div>
                    {expanded ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    )}
                </div>

                {/* Expanded Content */}
                {expanded && (
                    <div className="p-4 space-y-4">
                        {/* Coupon input */}
                        <div className="flex gap-2">
                            <Input
                                placeholder="Enter coupon"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="bg-background border-border"
                            />
                            <Button variant="outline" onClick={() => handleApplyCoupon()}>
                                Apply
                            </Button>
                        </div>

                        {/* Scrollable coupons */}
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {AVAILABLE_COUPONS.map((coupon) => (
                                <button
                                    key={coupon.code}
                                    onClick={() => handleApplyCoupon(coupon.code)}
                                    className={`flex items-center gap-1 px-3 py-2 rounded-lg border whitespace-nowrap text-sm ${appliedCoupon === coupon.code
                                        ? "bg-green-100 border-green-400 text-green-700"
                                        : "bg-muted hover:bg-accent"
                                        }`}
                                >
                                    <Ticket className="w-4 h-4" /> {coupon.code}
                                </button>
                            ))}
                        </div>

                        {/* Applied Coupon */}
                        {appliedCoupon && (
                            <p className="text-sm text-green-600 flex items-center gap-1">
                                <CheckCircle className="w-4 h-4" /> Coupon "{appliedCoupon}" applied!
                                You saved ₹{discountAmount}.
                            </p>
                        )}

                        {/* Price Breakdown */}
                        <div className="bg-muted rounded-lg p-3 text-sm space-y-2">
                            <div className="flex justify-between">
                                <span>Course Price</span>
                                <span>₹{coursePrice}</span>
                            </div>
                            {appliedCoupon && (
                                <div className="flex justify-between text-green-600">
                                    <span>Discount</span>
                                    <span>-₹{discountAmount}</span>
                                </div>
                            )}
                            <div className="flex justify-between font-bold text-lg border-t pt-2">
                                <span>Total</span>
                                <span>₹{finalPrice}</span>
                            </div>
                        </div>

                        {/* Enroll Button */}
                        <Button
                            className="w-full bg-gradient-to-r from-primary to-pink-500 text-white text-lg py-6 rounded-xl hover:shadow-lg transition-all"
                            onClick={() => onCheckout(course.id, finalPrice)}
                        >
                            Proceed to Payment
                        </Button>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {course.duration}
                            </div>
                            <div className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3" /> {course.chapters} chapters
                            </div>
                            <div className="flex items-center gap-1">
                                <Award className="w-3 h-3" /> Certificate
                            </div>
                            <div className="flex items-center gap-1">
                                <Shield className="w-3 h-3" /> Lifetime
                            </div>
                        </div>

                        {/* Guarantee */}
                        <div className="text-center p-2 bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-lg border border-primary/20 text-xs">
                            <Shield className="w-4 h-4 text-primary mx-auto mb-1" />
                            30-Day Money Back Guarantee
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
