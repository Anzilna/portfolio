import {
  Html,
  Head,
  Body,
  Preview,
  Container,
  Section,
  Text,
  Hr,
  Button,
} from "@react-email/components";

interface Props {
  name: string;
}

const BG = "#1A1A1A";
const FG = "#F5F2EC";
const DIVIDER = "rgba(245,242,236,0.08)";

export default function ConfirmationEmail({ name }: Props) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Got your message, {name} — I&apos;ll be in touch soon.</Preview>
      <Body
        style={{
          margin: 0,
          padding: "32px 16px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: 520,
            margin: "0 auto",
            padding: "40px 36px",
            background: BG,
            border: "1px solid rgba(245,242,236,0.07)",
            borderRadius: 12,
          }}
        >

          {/* Header */}
          <Section style={{ paddingBottom: 32, borderBottom: `1px solid ${DIVIDER}` }}>
            <Text
              style={{
                margin: 0,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(245,242,236,0.38)",
              }}
            >
              Mohammed Anzil N A
            </Text>
          </Section>

          {/* Title */}
          <Section style={{ padding: "40px 0 28px" }}>
            <Text
              style={{
                margin: 0,
                fontSize: 44,
                fontWeight: 700,
                letterSpacing: "-0.055em",
                color: FG,
                lineHeight: "1.0",
              }}
            >
              Got it.
            </Text>
          </Section>

          {/* Body */}
          <Section style={{ paddingBottom: 40 }}>
            <Text style={{ margin: "0 0 16px", fontSize: 16, color: FG, lineHeight: "1.7" }}>
              Hi {name},
            </Text>
            <Text style={{ margin: "0 0 16px", fontSize: 16, color: "rgba(245,242,236,0.72)", lineHeight: "1.7" }}>
              Thanks for reaching out — I&apos;ve received your message and will get back to you soon.
            </Text>
            <Text style={{ margin: 0, fontSize: 16, color: "rgba(245,242,236,0.72)", lineHeight: "1.7" }}>
              In the meantime, feel free to explore my work or connect on LinkedIn.
            </Text>
          </Section>

          {/* CTAs */}
          <Section style={{ paddingBottom: 48 }}>
            <Button
              href="https://mohammedanzil.in"
              style={{
                display: "inline-block",
                marginRight: 10,
                padding: "12px 26px",
                background: FG,
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: BG,
                textDecoration: "none",
              }}
            >
              Portfolio ↗
            </Button>
            <Button
              href="https://linkedin.com/in/Anzil-na"
              style={{
                display: "inline-block",
                padding: "12px 26px",
                border: "1px solid rgba(245,242,236,0.28)",
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: FG,
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              LinkedIn
            </Button>
          </Section>

          {/* Sign-off */}
          <Section style={{ paddingBottom: 40, borderBottom: `1px solid ${DIVIDER}` }}>
            <Text style={{ margin: 0, fontSize: 15, color: FG }}>— Anzil</Text>
          </Section>

          {/* Footer */}
          <Text style={{ margin: "32px 0 0", fontSize: 12, color: "rgba(245,242,236,0.22)" }}>
            mohammedanzil.in
          </Text>

        </Container>
      </Body>
    </Html>
  );
}
