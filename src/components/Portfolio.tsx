import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "./TypingAnimation";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
// Using the uploaded profile picture
const profilePicture = "/lovable-uploads/52e821c7-65a1-4374-8faa-21a34735ba4f.png";
import { 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Code, 
  Database, 
  Brain, 
  Server, 
  Trophy, 
  Award,
  ExternalLink,
  Calendar,
  MapPin,
  Sparkles,
  Terminal,
  Smartphone,
  Globe
} from "lucide-react";

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const typingTexts = [
    "Software Developer",
    "AI Engineer", 
    "Full Stack Enthusiast",
    "Problem Solver"
  ];

  const skills = {
    technical: [
      { name: "Python", icon: Code, category: "Programming" },
      { name: "Java", icon: Code, category: "Programming" },
      { name: "JavaScript", icon: Code, category: "Programming" },
      { name: "Kotlin", icon: Smartphone, category: "Mobile" },
      { name: "HTML/CSS", icon: Globe, category: "Web" },
      { name: "React JS", icon: Code, category: "Frontend" },
      { name: "Firebase", icon: Database, category: "Database" },
      { name: "MongoDB", icon: Database, category: "Database" },
      { name: "MySQL", icon: Database, category: "Database" },
      { name: "OpenAI API", icon: Brain, category: "AI" },
      { name: "Scikit-Learn", icon: Brain, category: "ML" },
      { name: "Node.js", icon: Server, category: "Backend" }
    ],
    soft: [
      "Leadership",
      "Teamwork", 
      "Communication",
      "Time Management",
      "Problem Solving",
      "Creative Thinking"
    ]
  };

  const projects = [
    {
      title: "Blog Management System",
      description: "Full-stack web application for creating, managing, and publishing blog posts with user authentication and rich text editor.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/santhoshb6361",
      demo: "https://github.com/santhoshb6361"
    },
    {
      title: "Pro Insight (AI Assistant)",
      description: "Intelligent AI assistant powered by OpenAI API for answering queries, content generation, and productivity enhancement.",
      tech: ["Python", "OpenAI API", "Streamlit", "NLP"],
      github: "https://github.com/santhoshb6361",
      demo: "https://github.com/santhoshb6361"
    },
    {
      title: "Movie Recommendation System",
      description: "ML-powered recommendation engine that suggests movies based on user preferences and viewing history.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Flask"],
      github: "https://github.com/santhoshb6361",
      demo: "https://github.com/santhoshb6361"
    },
    {
      title: "Geo Media",
      description: "Location-based social media platform for sharing and discovering content based on geographical proximity.",
      tech: ["React Native", "Firebase", "Google Maps API"],
      github: "https://github.com/santhoshb6361",
      demo: "https://github.com/santhoshb6361"
    },
    {
      title: "Report It",
      description: "Community reporting platform for citizens to report local issues and track resolution progress.",
      tech: ["JavaScript", "Firebase", "CSS", "HTML"],
      github: "https://github.com/santhoshb6361",
      demo: "https://github.com/santhoshb6361"
    }
  ];

  const education = [
    {
      degree: "B.E. in AI & Machine Learning",
      institution: "Ballari Institute of Technology & Management",
      year: "2022-2026",
      grade: "CGPA: 6.45",
      status: "current"
    },
    {
      degree: "Diploma in Electrical & Electronics Engineering",
      institution: "HSK Polytechnic",
      year: "2019-2022",
      grade: "CGPA: 8.68",
      status: "completed"
    },
    {
      degree: "SSLC",
      institution: "St. John's High School",
      year: "2019",
      grade: "58.56%",
      status: "completed"
    }
  ];

  const achievements = [
    {
      title: "Top 50 Teams",
      event: "National Space Hackathon 2025",
      organizer: "IIT Delhi",
      icon: Trophy
    },
    {
      title: "3rd Place",
      event: "HackB2025",
      organizer: "Ballari Institute of Technology",
      icon: Award
    }
  ];

  const certifications = [
    "Python with Data Structures",
    "Google Cloud Generative AI Track",
    "Java Full Stack with React JS & AI",
    "Oracle Cloud Infrastructure Foundations"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'education', 'achievements', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_wasm3p4',
        'template_gy71a1k',
        formRef.current!,
        '_diXxBUhbXmZ3LrIO'
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      formRef.current?.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-neon bg-clip-text text-transparent">
              Santhosh Kumar B
            </div>
            <div className="hidden md:flex space-x-8">
              {['Hero', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary neon-glow"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden neon-border p-1">
              <img 
                src={profilePicture} 
                alt="Santhosh Kumar B"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full pulse-glow"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-neon bg-clip-text text-transparent">Santhosh</span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-6 h-16 flex items-center justify-center">
            <TypingAnimation texts={typingTexts} />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about AI, full-stack development, and building impactful digital solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="neon-border bg-primary hover:bg-primary/80 text-primary-foreground neon-glow"
              onClick={() => window.open('https://drive.google.com/file/d/1PnhWr12cgTwJqYAFNSdocKfqVgb7x4Ru/view', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-cyber bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.technical.map((skill, index) => (
                  <Card key={index} className="card-hover neon-border bg-card/50">
                    <CardContent className="p-4 text-center">
                      <skill.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.category}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-secondary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm neon-glow-purple hover:scale-105 transition-transform"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-electric bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover neon-border bg-card/50 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 relative z-10">
                    <button 
                      className="flex-1 h-9 px-3 rounded-md text-sm font-medium border border-primary bg-transparent text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-center gap-1"
                      onClick={() => {
                        console.log('Code button clicked');
                        window.open('https://github.com/santhoshb6361?tab=repositories', '_blank');
                      }}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </button>
                    <button 
                      className="flex-1 h-9 px-3 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 cursor-pointer flex items-center justify-center gap-1"
                      onClick={() => {
                        console.log('Demo button clicked');
                        window.open('https://github.com/santhoshb6361?tab=repositories', '_blank');
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-neon bg-clip-text text-transparent">Education Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary neon-glow"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  {/* Timeline marker */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full neon-glow z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <Card className="neon-border bg-card/50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm text-primary font-medium">{edu.year}</span>
                          {edu.status === 'current' && (
                            <Badge variant="secondary" className="text-xs">Current</Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-muted-foreground mb-2">{edu.institution}</p>
                        <p className="text-sm font-medium text-accent">{edu.grade}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-cyber bg-clip-text text-transparent">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-hover neon-border bg-card/50">
                <CardContent className="p-8 text-center">
                  <achievement.icon className="h-16 w-16 mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2 text-primary">{achievement.title}</h3>
                  <p className="text-lg mb-1">{achievement.event}</p>
                  <p className="text-muted-foreground">{achievement.organizer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-electric bg-clip-text text-transparent">Certifications</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => {
              const getClickHandler = () => {
                switch(cert) {
                  case 'Google Cloud Generative AI Track':
                    return () => window.open('https://drive.google.com/file/d/1_2gQEoaC9o2K60r0-nUFd__EBCisHURA/view?usp=drive_link', '_blank');
                  case 'Oracle Cloud Infrastructure Foundations':
                    return () => window.open('https://drive.google.com/file/d/1icUD1No2yvyGf12I3JG5xzERZkyiHJqi/view?usp=sharing', '_blank');
                  case 'Java Full Stack with React JS & AI':
                    return () => window.open('https://drive.google.com/file/d/1w16cFqNyaDmpRUH0ZRZVtA48w3HLbECK/view?usp=sharing', '_blank');
                  default:
                    return undefined;
                }
              };
              
              const isClickable = ['Google Cloud Generative AI Track', 'Oracle Cloud Infrastructure Foundations', 'Java Full Stack with React JS & AI'].includes(cert);
              
              return (
                <Card 
                  key={index} 
                  className={`card-hover neon-border bg-card/50 ${isClickable ? 'cursor-pointer' : ''}`}
                  onClick={getClickHandler()}
                >
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
                    <p className="font-medium">{cert}</p>
                    {isClickable && (
                      <ExternalLink className="h-4 w-4 mx-auto mt-2 text-muted-foreground" />
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-neon bg-clip-text text-transparent">✨ Let's Connect</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Ready to collaborate on amazing projects? Let's build something incredible together!
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="neon-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://api.web3forms.com/submit" 
                  method="POST" 
                  className="space-y-4"
                >
                  {/* Hidden API Key */}
                  <input type="hidden" name="access_key" value="9a44845b-e8bf-4284-ac9e-06688f2167b0" />
                  
                  <Input 
                    name="name" 
                    placeholder="Your Name" 
                    className="neon-border" 
                    required 
                  />
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="neon-border" 
                    required 
                  />
                  <Textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows={5} 
                    className="neon-border" 
                    required 
                  />
                  <button 
                    type="submit" 
                    className="w-full h-10 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                    onClick={() => console.log('Send Message button clicked')}
                  >
                    <Mail className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-secondary">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center neon-glow">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">santhoshb6361@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center neon-glow-purple">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 6361989114</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center neon-glow-pink">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Ballari, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="neon-border hover:neon-glow"
                    onClick={() => window.open('https://www.linkedin.com/in/santhosh-kumar-b-526216317', '_blank')}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="neon-border hover:neon-glow"
                    onClick={() => window.open('https://github.com/santhoshb6361', '_blank')}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="neon-border hover:neon-glow"
                    onClick={() => window.open('mailto:santhoshb6361@gmail.com', '_blank')}
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Santhosh Kumar B. Built with passion and neon vibes ✨
          </p>
        </div>
      </footer>
    </div>
  );
};