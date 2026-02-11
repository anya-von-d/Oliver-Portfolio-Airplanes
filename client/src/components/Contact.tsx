import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const recipient = 'oliveris@stanford.edu';
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: "Email client opened!",
      description: "Please send the email from your email application.",
    });

    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-32 px-4 sm:px-6 overflow-hidden" data-testid="section-contact">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-white" data-testid="heading-contact">
              <span className="text-primary">&lt;</span>Contact<span className="text-primary">/&gt;</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Interested in aerospace collaboration or have questions? Reach out to me from this contact form and I will get back to you shortly.
            </p>
            <div className="pt-2">
              <a
                href="mailto:oliveris@stanford.edu"
                className="text-primary hover:underline font-mono text-base sm:text-lg"
                data-testid="link-email-contact"
              >
                oliveris@stanford.edu
              </a>
            </div>
          </div>

          <Card className="p-6 sm:p-8 bg-white/10 backdrop-blur-md border-white/20" data-testid="card-contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Message *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full min-h-[150px] resize-none bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-submit-contact"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
