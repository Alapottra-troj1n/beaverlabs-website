import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// This is your standalone Accordion component
export function AccordionDemo() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="max-w-lg mx-auto text-white"
        >
            <AccordionItem value="shipping">
                <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                <AccordionContent>
                    We offer standard (5-7 days), express (2-3 days), and overnight
                    shipping. Free shipping on international orders.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                    Returns accepted within 30 days. Items must be unused and in original
                    packaging. Refunds processed within 5-7 business days.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
                <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                <AccordionContent>
                    Reach us via email, live chat, or phone. We respond within 24 hours
                    during business days.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

// This is your main Testimonials page/section
const FAQ = () => {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">Frequently Asked Questions</h2>
            {/* We call the AccordionDemo component here */}
            <AccordionDemo />
        </div>
    );
};

export default FAQ;