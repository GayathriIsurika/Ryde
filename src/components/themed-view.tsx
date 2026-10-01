import { View, type ViewProps } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

export type ThemedViewProps = ViewProps & {
  type?: 'default' | 'backgroundElement' | 'selected';
};

export function ThemedView({ style, type = 'default', ...props }: ThemedViewProps) {
  const theme = useTheme();

  const backgroundColor = {
    default: theme.background,
    backgroundElement: theme.backgroundElement,
    selected: theme.backgroundSelected,
  }[type];

  return <View style={[{ backgroundColor }, style]} {...props} />;
}
