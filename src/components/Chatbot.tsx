import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const portfolioKnowledge = {
  skills: ["Python", "Java", "JavaScript", "Kotlin", "React JS", "Node.js", "Firebase", "MongoDB", "MySQL", "OpenAI API"],
  projects: ["Blog Management System", "Pro Insight AI Assistant", "Movie Recommendation System", "Geo Media", "Report It"],
  achievements: ["Top 50 Teams at National Space Hackathon 2025 (IIT Delhi)", "3rd Place at HackB2025"],
  education: "B.E. in AI & Machine Learning at Ballari Institute of Technology & Management (2022-2026)",
  contact: "Available via email and LinkedIn"
};

const getBotResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes("skill") || msg.includes("technology") || msg.includes("tech")) {
    return `Santhosh is skilled in: ${portfolioKnowledge.skills.slice(0, 5).join(", ")} and more! Would you like to know about specific technologies?`;
  }
  
  if (msg.includes("project")) {
    return `Here are some of Santhosh's key projects: ${portfolioKnowledge.projects.slice(0, 3).join(", ")}. Feel free to ask about any specific project!`;
  }
  
  if (msg.includes("achievement") || msg.includes("award")) {
    return `Santhosh has achieved: ${portfolioKnowledge.achievements.join(", ")}.`;
  }
  
  if (msg.includes("education") || msg.includes("study") || msg.includes("college")) {
    return `${portfolioKnowledge.education}`;
  }
  
  if (msg.includes("contact") || msg.includes("email") || msg.includes("reach")) {
    return `You can contact Santhosh through the contact section below. Just scroll down and fill out the form to get in touch!`;
  }
  
  if (msg.includes("blog") || msg.includes("cms")) {
    return `The Blog Management System is a full-stack web application built with React, Node.js, MongoDB, and Express. It provides features for creating and managing blog posts with authentication.`;
  }
  
  if (msg.includes("ai") || msg.includes("insight")) {
    return `Pro Insight is an AI assistant powered by OpenAI API. It helps with queries, content generation, and productivity tasks.`;
  }
  
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return `Hello! I'm here to help you learn about Santhosh's portfolio. Ask me about his skills, projects, achievements, or education!`;
  }
  
  if (msg.includes("who") || msg.includes("about")) {
    return `Santhosh is a passionate Software Developer and AI Engineer. He specializes in building AI-powered applications, full-stack development, and solving complex problems. Want to know more about his skills or projects?`;
  }
  
  return `I'm here to help! Ask me about Santhosh's skills, projects, achievements, education, or how to contact him.`;
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Santhosh's portfolio assistant. Ask me about his skills, projects, achievements, or education!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Jumping animation every 2 seconds
  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 600);
    }, 2000);

    return () => clearInterval(jumpInterval);
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");

    // Get bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <>
      {/* Pet Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className={`h-16 w-16 rounded-full bg-gradient-to-br from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 shadow-2xl neon-glow transition-all duration-300 ${
              isJumping ? "animate-bounce" : ""
            }`}
            style={{
              animation: isJumping ? "bounce 0.6s ease-in-out" : "none"
            }}
          >
            <div className="relative">
              <MessageCircle className="h-7 w-7" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[550px] bg-background border-2 border-primary/30 rounded-2xl shadow-2xl neon-glow flex flex-col animate-scale-in">
          {/* Pet Header */}
          <div className="flex items-center justify-between p-4 border-b-2 border-primary/20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐕</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
              <div>
                <h3 className="font-bold text-primary">Portfolio Assistant</h3>
                <p className="text-xs text-muted-foreground">Always ready to help!</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 hover:bg-destructive/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-gradient-to-br from-muted to-muted/50 border border-primary/20"
                    } animate-fade-in`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t-2 border-primary/20 bg-card/50 rounded-b-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 border-primary/30 focus:border-primary"
              />
              <Button 
                type="submit" 
                size="icon" 
                className="relative z-10 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Try: &quot;skills&quot;, &quot;projects&quot;, &quot;achievements&quot;
            </p>
          </div>
        </div>
      )}
    </>
  );
};
