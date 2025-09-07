// import { useState } from 'react';
// import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const contactInfo = [
//     {
//       icon: <Phone className="text-primary" size={24} />,
//       title: 'Phone',
//       value: '+91 9113899388',
//       link: 'tel:+919113899388'
//     },
//       {
//       icon: <Mail className="text-primary" size={24} />,
//       title: 'Email',
//       value: 'laxmikanta.techai@gmail.com',
//       link: 'mailto:laxmikanta.ai@gmail.com'
//     },
//     {
//       icon: <Linkedin className="text-primary" size={24} />,
//       title: 'LinkedIn',
//       value: 'laxmikanta-jena-878b6127b',
//       link: 'https://linkedin.com/in/laxmikanta-jena-878b6127b'
//     },
//     {
//       icon: <Github className="text-primary" size={24} />,
//       title: 'GitHub',
//       value: 'LaxmikantaJena',
//       link: 'https://github.com/LaxmikantaJena'
//     }
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.name || !formData.email || !formData.message) {
//       toast({
//         title: "Validation Error",
//         description: "Please fill in all fields.",
//         variant: "destructive"
//       });
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       toast({
//         title: "Invalid Email",
//         description: "Please enter a valid email address.",
//         variant: "destructive"
//       });
//       return;
//     }

//     // Simulate form submission
//     toast({
//       title: "Message Sent!",
//       description: "Thank you for your message. I'll get back to you soon!",
//     });

//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//             Let's Connect
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Ready to discuss your project or have questions? I'm here to help. Let's start a conversation!
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold text-foreground mb-6">
//                 Get In Touch
//               </h3>
//               <p className="text-muted-foreground mb-8 leading-relaxed">
//                 I'm always interested in new opportunities and exciting projects. 
//                 Whether you have a project in mind, want to discuss collaboration, 
//                 or just want to say hello, feel free to reach out!
//               </p>
//             </div>

//             {/* Contact Cards */}
//             <div className="grid sm:grid-cols-2 gap-6">
//               {contactInfo.map((info, index) => (
//                 <Card 
//                   key={index} 
//                   className="hover:shadow-lg transition-shadow duration-200 border-border hover:border-primary/30"
//                 >
//                   <CardContent className="p-6">
//                     <div className="flex items-center space-x-4">
//                       <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
//                         {info.icon}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
//                         <a 
//                           href={info.link}
//                           target={info.title === 'LinkedIn' || info.title === 'GitHub' ? '_blank' : undefined}
//                           rel={info.title === 'LinkedIn' || info.title === 'GitHub' ? 'noopener noreferrer' : undefined}
//                           className="text-muted-foreground hover:text-primary transition-colors duration-200"
//                         >
//                           {info.value}
//                         </a>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Location */}
//             <Card className="border-primary/20">
//               <CardContent className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
//                     <MapPin className="text-primary" size={24} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-2">Location</h4>
//                     <p className="text-muted-foreground">
//                       Currently based in <span className="font-medium text-foreground">Bangalore, India</span>
//                     </p>
//                     <p className="text-sm text-muted-foreground mt-1">
//                       Open to remote opportunities and relocation
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <Card className="border-primary/20 shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl text-foreground">
//                 Send Me a Message
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-foreground font-medium">
//                     Your Name
//                   </Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Enter your full name"
//                     className="border-border focus:border-primary"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-foreground font-medium">
//                     Email Address
//                   </Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Enter your email address"
//                     className="border-border focus:border-primary"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message" className="text-foreground font-medium">
//                     Message
//                   </Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Tell me about your project or just say hello..."
//                     className="border-border focus:border-primary min-h-[120px] resize-none"
//                     required
//                   />
//                 </div>

//                 <Button 
//                   type="submit"
//                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
//                 >
//                   <Send size={18} className="mr-2" />
//                   Send Message
//                 </Button>
//               </form>

//               <div className="mt-6 pt-6 border-t border-border">
//                 <p className="text-sm text-muted-foreground text-center">
//                   Prefer direct contact? Email me at{' '}
//                   <a 
//                     href="mailto:laxmikanta.techai@gmail.com"
//                     className="text-primary hover:underline font-medium"
//                   >
//                     laxmikanta.techai@gmail.com
//                   </a>
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Phone className="text-primary" size={24} />,
      title: 'Phone',
      value: '+91 9113899388',
      link: 'tel:+919113899388'
    },
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      value: 'laxmikanta.techai@gmail.com',
      link: 'mailto:laxmikanta.techai@gmail.com'
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: 'LinkedIn',
      value: 'laxmikanta-jena-878b6127b',
      link: 'https://linkedin.com/in/laxmikanta-jena-878b6127b'
    },
    {
      icon: <Github className="text-primary" size={24} />,
      title: 'GitHub',
      value: 'LaxmikantaJena',
      link: 'https://github.com/LaxmikantaJena'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // ✅ Send email with EmailJS
    emailjs.send(
      "service_ifsx6t8",   // your Service ID
      "template_1ealvor",  // your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "laxmikantajena28@gmail.com"
      },
      "eQAF1XJ6prKDuXykk"   // your Public Key
    ).then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project or have questions? I'm here to help. Let's start a conversation!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a project in mind, want to discuss collaboration,
              or just want to say hello, feel free to reach out!
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-border hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <a
                          href={info.link}
                          target={info.title === 'LinkedIn' || info.title === 'GitHub' ? '_blank' : undefined}
                          rel={info.title === 'LinkedIn' || info.title === 'GitHub' ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Location</h4>
                    <p className="text-muted-foreground">
                      Currently based in <span className="font-medium text-foreground">Bangalore, India</span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">Open to remote opportunities and relocation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                  <Send size={18} className="mr-2" /> Send Message
                </Button>
              </form>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Prefer direct contact? Email me at{" "}
                  <a href="mailto:laxmikanta.techai@gmail.com" className="text-primary hover:underline font-medium">
                    laxmikanta.techai@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
