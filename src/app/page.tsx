"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BookOpen, Mail, Package, Quote, Shield, Users, Zap } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-background","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern office technology workspace - Photo by Pew Nguyen"},
  {"id":"about-image","url":"https://images.pexels.com/photos/5453922/pexels-photo-5453922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two young professionals working diligently on computers in a modern office setting."},
  {"id":"feature-cloud","url":"https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a modern server unit in a blue-lit data center environment."},
  {"id":"feature-security","url":"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up view of a mouse cursor over digital security text on display."},
  {"id":"feature-support","url":"https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Male call center agent with headset working at desk, providing excellent customer service."},
  {"id":"product-crm","url":"https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a professional audio and video editing software interface with waveform displays."},
  {"id":"product-analytics","url":"https://images.pexels.com/photos/936135/pexels-photo-936135.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Businessman using a tablet for data analysis in a relaxed office setting."},
  {"id":"product-automation","url":"https://images.pexels.com/photos/15584332/pexels-photo-15584332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed view of a 3D printer mechanism in a dark setting, highlighting technology."},
  {"id":"team-member-1","url":"https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Adult man in pink dress shirt looking stressed while talking on a smartphone indoors."},
  {"id":"team-member-2","url":"https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young woman with curly hair working on her laptop in a cozy home setting, exuding confidence and focus."},
  {"id":"team-member-3","url":"https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman with red hair intensely focused on a computer screen in an office setting."},
  {"id":"team-member-4","url":"https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Businesswoman presenting data on a large digital screen in a modern office setting."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/7642001/pexels-photo-7642001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Man and woman shaking hands in a business agreement indoors, smiling confidently."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young woman in uniform smiling while standing at counter desk in  cafe"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Barber skillfully trims client's hair in modern barbershop setting."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of professionals shaking hands over coffee in a modern office."},
  {"id":"testimonial-5","url":"https://images.pexels.com/photos/7709293/pexels-photo-7709293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Team of call center agents working diligently with headsets and laptops in a modern office setting."},
  {"id":"faq-image","url":"https://images.pexels.com/photos/8292809/pexels-photo-8292809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Real estate agent discussing paperwork with a client in a bright, modern office setting."},
  {"id":"blog-1","url":"https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Business professionals discussing data charts and graphs in a modern office setting."},
  {"id":"blog-2","url":"https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"An unrecognizable person with binary code projected, symbolizing cybersecurity and digital coding."},
  {"id":"blog-3","url":"https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a modern server unit in a blue-lit data center environment."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a handshake between two professionals in a modern office setting, emphasizing partnership and agreement."}
];

export default function Home() {
  const getAssetUrl = (assetId: string) => {
    const asset = assetMap.find(a => a.id === assetId);
    return asset?.url ?? "/public/images/placeholder.webp";
  };

  const getAssetAlt = (assetId: string, fallback?: string) => {
    const asset = assetMap.find(a => a.id === assetId);
    return asset?.alt ?? fallback ?? "Decorative image";
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TechFlow"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Business with IT Solutions"
          description="We provide cutting-edge technology services to help your business grow, scale, and stay secure in the digital age."
          tag="Trusted IT Partner"
          tagIcon={Shield}
          buttons={[
            {
              text: "Get Started",
              href: "contact"
            },
            {
              text: "Our Services",
              href: "feature"
            }
          ]}
          imageSrc={getAssetUrl("hero-background")}
          imageAlt={getAssetAlt("hero-background", "Modern technology workspace")}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About TechFlow"
          description={[
            "We are a forward-thinking IT company dedicated to empowering businesses through innovative technology solutions.",
            "Our team of experts combines deep technical knowledge with business acumen to deliver results that matter."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "team"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Core Services"
          description="Comprehensive IT solutions designed to accelerate your business growth and digital transformation"
          tag="Services"
          tagIcon={Zap}
          features={[
            {
              title: "Cloud Infrastructure",
              description: "Scalable cloud solutions that grow with your business needs, ensuring maximum uptime and performance",
              imageSrc: getAssetUrl("feature-cloud"),
              imageAlt: getAssetAlt("feature-cloud", "Cloud computing infrastructure")
            },
            {
              title: "Cybersecurity",
              description: "Advanced security measures to protect your data and systems from modern threats and vulnerabilities",
              imageSrc: getAssetUrl("feature-security"),
              imageAlt: getAssetAlt("feature-security", "Cybersecurity protection")
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock technical support to keep your operations running smoothly without interruption",
              imageSrc: getAssetUrl("feature-support"),
              imageAlt: getAssetAlt("feature-support", "IT support services")
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Software Solutions"
          description="Powerful software tools to streamline your business operations and boost productivity"
          tag="Products"
          tagIcon={Package}
          products={[
            {
              id: "1",
              name: "Business CRM Platform",
              price: "$99/month",
              imageSrc: getAssetUrl("product-crm"),
              imageAlt: getAssetAlt("product-crm", "CRM software dashboard"),
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Analytics Dashboard Pro",
              price: "$149/month",
              imageSrc: getAssetUrl("product-analytics"),
              imageAlt: getAssetAlt("product-analytics", "Analytics dashboard interface"),
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Workflow Automation Suite",
              price: "$199/month",
              imageSrc: getAssetUrl("product-automation"),
              imageAlt: getAssetAlt("product-automation", "Automation workflow interface"),
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Expert Team"
          description="Experienced professionals dedicated to delivering exceptional IT solutions for your business"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CTO & Co-Founder",
              imageSrc: getAssetUrl("team-member-1"),
              imageAlt: getAssetAlt("team-member-1", "Sarah Johnson portrait"),
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/sarah-johnson"
                },
                {
                  icon: "Twitter",
                  url: "https://twitter.com/sarah_johnson"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Lead Developer",
              imageSrc: getAssetUrl("team-member-2"),
              imageAlt: getAssetAlt("team-member-2", "Michael Chen portrait"),
              socialLinks: [
                {
                  icon: "Github",
                  url: "https://github.com/michael-chen"
                },
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/michael-chen"
                }
              ]
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Security Specialist",
              imageSrc: getAssetUrl("team-member-3"),
              imageAlt: getAssetAlt("team-member-3", "Emily Rodriguez portrait"),
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/emily-rodriguez"
                },
                {
                  icon: "Globe",
                  url: "https://emily-rodriguez.com"
                }
              ]
            },
            {
              id: "4",
              name: "David Kim",
              role: "Project Manager",
              imageSrc: getAssetUrl("team-member-4"),
              imageAlt: getAssetAlt("team-member-4", "David Kim portrait"),
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/david-kim"
                },
                {
                  icon: "Twitter",
                  url: "https://twitter.com/david_kim"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Our Clients Say"
          description="Hear from businesses that have transformed their operations with our IT solutions"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              handle: "@jwalshinc",
              testimonial: "TechFlow transformed our entire IT infrastructure. Their cloud migration saved us 40% in operational costs while improving performance.",
              imageSrc: getAssetUrl("testimonial-1"),
              imageAlt: getAssetAlt("testimonial-1", "Jennifer Walsh portrait")
            },
            {
              id: "2",
              name: "Robert Martinez",
              handle: "@rmartinez",
              testimonial: "Outstanding cybersecurity implementation. We've had zero security incidents since working with TechFlow. Highly recommended.",
              imageSrc: getAssetUrl("testimonial-2"),
              imageAlt: getAssetAlt("testimonial-2", "Robert Martinez portrait")
            },
            {
              id: "3",
              name: "Lisa Thompson",
              handle: "@lisathompson",
              testimonial: "Their 24/7 support team is incredible. Any issue we have is resolved quickly and professionally. True partnership.",
              imageSrc: getAssetUrl("testimonial-3"),
              imageAlt: getAssetAlt("testimonial-3", "Lisa Thompson portrait")
            },
            {
              id: "4",
              name: "Marcus Wong",
              handle: "@marcuswong",
              testimonial: "The workflow automation suite has revolutionized our processes. We're now 60% more efficient in our daily operations.",
              imageSrc: getAssetUrl("testimonial-4"),
              imageAlt: getAssetAlt("testimonial-4", "Marcus Wong portrait")
            },
            {
              id: "5",
              name: "Amanda Foster",
              handle: "@afoster",
              testimonial: "Professional, reliable, and results-driven. TechFlow delivered exactly what they promised and exceeded our expectations.",
              imageSrc: getAssetUrl("testimonial-5"),
              imageAlt: getAssetAlt("testimonial-5", "Amanda Foster portrait")
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our IT services and solutions"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What IT services do you offer?",
              content: "We provide comprehensive IT services including cloud infrastructure, cybersecurity, software development, system integration, 24/7 support, and digital transformation consulting."
            },
            {
              id: "2",
              title: "How quickly can you respond to support requests?",
              content: "Our 24/7 support team typically responds within 15 minutes for critical issues and within 2 hours for standard requests. We guarantee 99.9% uptime for all managed services."
            },
            {
              id: "3",
              title: "Do you work with small businesses?",
              content: "Yes, we work with businesses of all sizes, from startups to enterprise corporations. Our solutions are scalable and can be customized to fit your specific needs and budget."
            },
            {
              id: "4",
              title: "What makes your cybersecurity different?",
              content: "We use advanced threat detection, multi-layered security protocols, and continuous monitoring. Our security specialists stay updated with the latest threats and implement proactive measures to protect your business."
            },
            {
              id: "5",
              title: "Can you help with cloud migration?",
              content: "Absolutely! We specialize in seamless cloud migration with minimal downtime. We assess your current infrastructure, create a migration plan, and provide ongoing support to ensure optimal performance."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Latest Insights"
          description="Stay updated with the latest trends, tips, and insights from the world of technology"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              tags: ["Digital Transformation", "Strategy"],
              title: "5 Steps to Successful Digital Transformation",
              excerpt: "Learn the essential steps to modernize your business operations and stay competitive in the digital age.",
              imageSrc: getAssetUrl("blog-1"),
              imageAlt: getAssetAlt("blog-1", "Digital transformation concept"),
              authorName: "Sarah Johnson",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              tags: ["Cybersecurity", "Best Practices"],
              title: "Essential Cybersecurity Practices for 2025",
              excerpt: "Discover the latest cybersecurity threats and learn how to protect your business with proven security measures.",
              imageSrc: getAssetUrl("blog-2"),
              imageAlt: getAssetAlt("blog-2", "Cybersecurity protection"),
              authorName: "Emily Rodriguez",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              tags: ["Cloud Computing", "Migration"],
              title: "Cloud Migration: A Complete Guide",
              excerpt: "Everything you need to know about migrating to the cloud, from planning to execution and optimization.",
              imageSrc: getAssetUrl("blog-3"),
              imageAlt: getAssetAlt("blog-3", "Cloud migration process"),
              authorName: "Michael Chen",
              date: "8 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          title="Ready to Transform Your Business?"
          description="Get in touch with our experts to discuss your IT needs and discover how we can help your business grow."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Get Started"
          termsText="By submitting your email, you agree to receive updates about our services and solutions."
          imageSrc={getAssetUrl("contact-image")}
          imageAlt={getAssetAlt("contact-image", "Professional business consultation")}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TechFlow"
          columns={[
            {
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Services",
                  href: "feature"
                },
                {
                  label: "Products",
                  href: "product"
                }
              ]
            },
            {
              items: [
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Blog",
                  href: "blog"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "https://example.com/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "https://example.com/terms"
                },
                {
                  label: "Support",
                  href: "https://example.com/support"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}