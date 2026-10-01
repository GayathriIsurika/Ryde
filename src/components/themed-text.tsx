import { Text, type TextProps, type TextStyle } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'small' | 'title' | 'link';
};

export function ThemedText({ style, type = 'default', ...props }: ThemedTextProps) {
  const theme = useTheme();

  const variantStyles: Record<string, TextStyle> = {
    default: { color: theme.text, fontSize: 16 },
    small: { color: theme.textSecondary, fontSize: 12 },
    title: { color: theme.text, fontSize: 24, fontWeight: '700' },
    link: { color: theme.text, fontSize: 16, textDecorationLine: 'underline' },
  };

  return <Text style={[variantStyles[type], style]} {...props} />;
}
