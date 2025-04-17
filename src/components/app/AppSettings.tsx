
import { useState } from "react";
import { Settings, Moon, Sun, Globe, Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const AppSettings = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("en");
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  const handleThemeChange = (value: string) => {
    setTheme(value as "light" | "dark" | "system");
    toast.success(`Theme changed to ${value}`);
    // In a real implementation, this would apply the theme
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    toast.success(`Language changed to ${value === "en" ? "English" : value === "es" ? "Spanish" : "French"}`);
    // In a real implementation, this would change the app language
  };

  const handleReset = () => {
    setTheme("light");
    setNotifications(true);
    setLanguage("en");
    setAnalyticsEnabled(true);
    toast.success("Settings reset to defaults");
  };

  const handleSave = () => {
    toast.success("Settings saved successfully");
    // In a real implementation, this would persist the settings
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>App Settings</SheetTitle>
          <SheetDescription>
            Customize your application experience.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 space-y-6">
          {/* Theme */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Theme</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                className="flex flex-col items-center justify-center h-20"
                onClick={() => handleThemeChange("light")}
              >
                <Sun className="h-5 w-5 mb-1" />
                <span className="text-xs">Light</span>
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                className="flex flex-col items-center justify-center h-20"
                onClick={() => handleThemeChange("dark")}
              >
                <Moon className="h-5 w-5 mb-1" />
                <span className="text-xs">Dark</span>
              </Button>
              <Button
                variant={theme === "system" ? "default" : "outline"}
                className="flex flex-col items-center justify-center h-20"
                onClick={() => handleThemeChange("system")}
              >
                <div className="flex">
                  <Sun className="h-4 w-4" />
                  <Moon className="h-4 w-4 ml-1" />
                </div>
                <span className="text-xs mt-1">System</span>
              </Button>
            </div>
          </div>
          
          <Separator />
          
          {/* Language */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="language">Language</Label>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </div>
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger id="language" className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator />
          
          {/* Notifications */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications" className="text-sm font-medium">Notifications</Label>
                <p className="text-xs text-muted-foreground">Receive product updates and alerts</p>
              </div>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="analytics" className="text-sm font-medium">Analytics</Label>
                <p className="text-xs text-muted-foreground">Help improve our services</p>
              </div>
              <Switch
                id="analytics"
                checked={analyticsEnabled}
                onCheckedChange={setAnalyticsEnabled}
              />
            </div>
          </div>
        </div>
        
        <SheetFooter className="sm:justify-between">
          <Button variant="outline" onClick={handleReset}>
            Reset to Defaults
          </Button>
          <SheetClose asChild>
            <Button onClick={handleSave}>Save Changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AppSettings;
