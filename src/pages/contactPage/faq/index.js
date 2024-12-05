"use client"
import { useState } from 'react';
import TopArrow from '@/assets/images/svg/topArrow';
import styles from './faq.module.scss';

const QandA = [
    {
        question: 'What is WeDu?',
        answer: 'WeDu is a digital platform that connects educators, students, and parents to find and share resources, practice, and support. Our mission is to help people learn and grow together.'
    },
    {
        question: 'How can I use WeDu?',
        answer: 'You can use WeDu to find and share resources, practice, and support. You can also create and share your own resources and practice.'
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, WeDu offers a free trial so you can explore all features before making a commitment.'
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Yes, you can change your plan at any time by visiting your account settings.'
    },
    {
        question: 'What is cancellation policy?',
        answer: 'You can cancel your subscription at any time. If canceled, your access will continue until the end of the current billing cycle.'
    },
    {
        question: 'Can other info be added to an invoice?',
        answer: 'Yes, additional information such as company details or tax numbers can be added to your invoice through your billing settings.'
    },
    {
        question: 'How does billing work?',
        answer: 'Billing is processed on a monthly or annual basis depending on the plan you choose. You will receive invoices via email.'
    },
    {
        question: 'How do I change my account email?',
        answer: 'To change your account email, go to your account settings and update the email address in the profile section.'
    },
    {
        question: 'How does support work?',
        answer: 'WeDu provides 24/7 customer support through email and live chat. You can also access a knowledge base for common questions.'
    },
    {
        question: 'Do you provide tutorials?',
        answer: 'Yes, WeDu offers video tutorials and guides to help you get the most out of the platform.'
    },
];


export default function Faq() {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section className={styles.faq}>
            <div className={styles.container2}>
                <div className={styles.faqHead}>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className={styles.faqDivMain}>
                    {QandA.map((data, index) => (
                        <div className={`${styles.faqDiv} ${activeFaq === index ? styles.active : ''}`} key={index}>
                            <div className={styles.faqDivHead} onClick={() => toggleFaq(index)}>
                                <h3>{data.question}</h3>
                                <div className={styles.faqDivIcon}>
                                    <TopArrow />
                                </div>
                            </div>
                            <div className={styles.faqDivContent}>
                                <p>{data.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
