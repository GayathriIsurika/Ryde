import { useRef, useState } from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CODE_LENGTH = 6;

export default function OtpScreen() {
  const [code, setCode] = useState('');
  const inputRef = useRef<TextInput>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>Verify your phone</Text>
        <Text style={styles.subtitle}>Enter the 6-digit code we sent to your phone number.</Text>
        <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()} style={styles.codeRow}>
          {Array.from({ length: CODE_LENGTH }, (_, index) => (
            <View key={index} style={[styles.codeBox, code.length === index && styles.activeCodeBox]}>
              <Text style={styles.digit}>{code[index] ?? ''}</Text>
            </View>
          ))}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={(value) => setCode(value.replace(/\D/g, '').slice(0, CODE_LENGTH))}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            maxLength={CODE_LENGTH}
            accessibilityLabel="Six-digit verification code"
            style={styles.hiddenInput}
            autoFocus
          />
        </TouchableOpacity>
        <View style={styles.resendRow}>
          <Text style={styles.resendText}>Didn't receive a code? </Text>
          <TouchableOpacity onPress={() => setCode('')}>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, code.length !== CODE_LENGTH && styles.disabledButton]}
          disabled={code.length !== CODE_LENGTH}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 72 },
  title: { fontSize: 28, fontWeight: '700', color: '#111', marginBottom: 12 },
  subtitle: { fontSize: 16, lineHeight: 24, color: '#666', marginBottom: 36 },
  codeRow: { flexDirection: 'row', justifyContent: 'space-between', position: 'relative' },
  codeBox: { width: 48, height: 56, borderWidth: 1, borderColor: '#d7d7d7', borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  activeCodeBox: { borderColor: '#9ac500', borderWidth: 2 },
  digit: { fontSize: 24, fontWeight: '600', color: '#111' },
  hiddenInput: { position: 'absolute', width: '100%', height: '100%', opacity: 0, color: 'transparent' },
  resendRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 28 },
  resendText: { color: '#666', fontSize: 14 },
  resendLink: { color: '#111', fontWeight: '700', fontSize: 14 },
  button: { height: 52, borderRadius: 20, backgroundColor: '#c1f819', alignItems: 'center', justifyContent: 'center', marginTop: 40, borderColor: "#c1f819", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, },
  disabledButton: { opacity: 0.5 },
  buttonText: { color: '#111', fontSize: 16, fontWeight: '600' },
});

