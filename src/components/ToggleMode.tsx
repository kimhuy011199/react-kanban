import { useTheme } from '@/providers/theme-provider';
import { Switch } from './ui/switch';
import { Moon, Sun } from 'lucide-react';

const ToggleMode = () => {
  const { setTheme, theme } = useTheme();

  const onCheckedChange = () => {
    setTheme(theme !== 'dark' ? 'dark' : 'light');
  };

  return (
    <div className="relative flex justify-center items-center gap-4 mt-auto border-t p-4">
      <Sun size={16} />
      <Switch onCheckedChange={onCheckedChange} checked={theme === 'dark'} />
      <Moon size={16} />
    </div>
  );
};

export default ToggleMode;
