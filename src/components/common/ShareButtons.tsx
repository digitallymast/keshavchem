
import { Button } from "@/components/ui/button";
import { Copy, Mail, Share2, WhatsApp } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
  url: string;
  title: string;
  showLabel?: boolean;
}

const ShareButtons = ({ url, title, showLabel = false }: ShareButtonsProps) => {
  const shareViaWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareViaEmail = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
    window.open(emailUrl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={shareViaWhatsApp}
        className="flex items-center gap-2"
      >
        <WhatsApp size={16} />
        {showLabel && "WhatsApp"}
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={shareViaEmail}
        className="flex items-center gap-2"
      >
        <Mail size={16} />
        {showLabel && "Email"}
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={copyToClipboard}
        className="flex items-center gap-2"
      >
        <Copy size={16} />
        {showLabel && "Copy Link"}
      </Button>
    </div>
  );
};

export default ShareButtons;
