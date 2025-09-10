import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
                Terms & Conditions
              </h1>
              <p className="text-xl text-muted-foreground">
                Pedal Inn Membership Program
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Last updated: December 2024
              </p>
            </div>

            <div className="space-y-8">
              {/* Membership Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    1. Membership Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pedal Inn memberships provide prepaid lodging credits and service perks for our boutique hotel and bike service hub in downtown Cañon City, Colorado. These memberships are not investment securities and do not confer ownership rights in The Pedal Inn or its affiliates.
                  </p>
                  <p className="text-muted-foreground">
                    By purchasing a membership, you agree to these Terms & Conditions and acknowledge that you have read and understood all terms herein.
                  </p>
                </CardContent>
              </Card>

              {/* Membership Tiers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    2. Membership Tiers & Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Pedal Inn Founders Package - $1,000</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>5 prepaid nights at our boutique hotel (valid for 12 months from opening)</li>
                      <li>1 premium bike tune-up or rental credit</li>
                      <li>Priority booking for peak weekends and events</li>
                      <li>10% discount on retail purchases and future bookings</li>
                      <li>Invitations to members-only rides & community events</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Pedal Inn Adventure Tier - $2,500</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>12 prepaid nights at our boutique hotel (valid for 12 months from opening)</li>
                      <li>2 premium bike tune-ups</li>
                      <li>VIP passes to exclusive events</li>
                      <li>All benefits included in the Founders Package</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Expiration & Validity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    3. Expiration & Validity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Hotel Stay Credits:</strong> All prepaid nights expire 12 months from the official opening date of Pedal Inn (anticipated Spring 2026). Unused nights cannot be extended beyond this period.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Service Credits:</strong> Bike tune-up and rental credits expire 18 months from the opening date. These credits are non-transferable and must be used by the membership holder.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Discounts:</strong> The 10% discount on retail purchases and future bookings is valid for the lifetime of the membership and does not expire.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Event Access:</strong> Priority booking and exclusive event invitations are valid for the lifetime of the membership.
                  </p>
                </CardContent>
              </Card>

              {/* Booking & Usage */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    4. Booking & Usage Policies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Reservations:</strong> All hotel stays must be booked in advance through our reservation system. Availability is subject to hotel capacity and blackout dates may apply during peak periods.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Blackout Dates:</strong> Major holidays, special events, and peak tourism periods may be excluded from membership benefits. Members will be notified of blackout dates at least 30 days in advance.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Modifications:</strong> Reservations may be modified or cancelled up to 48 hours before check-in without penalty. Changes within 48 hours may result in forfeiture of the night&apos;s credit.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>No-Shows:</strong> Failure to check in without prior cancellation will result in forfeiture of the reserved night&apos;s credit.
                  </p>
                </CardContent>
              </Card>

              {/* Refund Policy */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    5. Refund Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Pre-Opening Refunds:</strong> Full refunds are available for memberships purchased before the hotel opening, minus a 5% processing fee, if requested at least 30 days before the anticipated opening date.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Post-Opening Refunds:</strong> No refunds are available after the hotel opens, except in cases of documented medical emergencies or other extenuating circumstances, which will be evaluated on a case-by-case basis.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Unused Credits:</strong> Unused hotel stay credits and service credits are non-refundable and cannot be converted to cash or transferred to other individuals.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Processing Time:</strong> Approved refunds will be processed within 30 days of approval and returned to the original payment method.
                  </p>
                </CardContent>
              </Card>

              {/* Transfer & Assignment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    6. Transfer & Assignment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Non-Transferable:</strong> Memberships are non-transferable and may only be used by the named membership holder. Photo identification may be required upon check-in.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Family Use:</strong> Immediate family members (spouse and dependent children) may use the membership benefits when accompanied by the membership holder.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Corporate Memberships:</strong> Corporate memberships may be transferred between employees of the same organization with written authorization and a $50 transfer fee.
                  </p>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    7. Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Service Interruptions:</strong> Pedal Inn reserves the right to temporarily suspend services due to maintenance, renovations, or circumstances beyond our control. Members will be notified of extended closures and credits may be extended accordingly.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Force Majeure:</strong> In the event of natural disasters, pandemics, or other force majeure events, membership benefits may be suspended or modified. Credits will be extended to compensate for lost time.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Maximum Liability:</strong> Pedal Inn&apos;s maximum liability for any membership-related claims shall not exceed the total amount paid for the membership.
                  </p>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    8. Changes to Terms & Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pedal Inn reserves the right to modify these Terms & Conditions at any time. Members will be notified of material changes via email at least 30 days in advance.
                  </p>
                  <p className="text-muted-foreground">
                    Continued use of membership benefits after notification of changes constitutes acceptance of the new terms.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">
                    9. Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    For questions about these Terms & Conditions or your membership, please contact us:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-muted-foreground"><strong>Email:</strong> info@peddlerinn.com</p>
                    <p className="text-muted-foreground"><strong>Phone:</strong> (719) 555-0123</p>
                    <p className="text-muted-foreground"><strong>Address:</strong> Main Street, Downtown Cañon City, Colorado 81212</p>
                    <p className="text-muted-foreground"><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM MST</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
              >
                ← Back to Pedal Inn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}