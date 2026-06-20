import {
  Html,
  Head,
  Body,
  Preview,
  Container,
  Section,
  Text,
  Link,
  Hr,
  Button,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  message: string;
}

const BG = "#1A1A1A";
const FG = "#F5F2EC";
const MUTED = "rgba(245,242,236,0.32)";
const DIVIDER = "rgba(245,242,236,0.08)";

export default function NotificationEmail({ name, email, message }: Props) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New message from {name}</Preview>
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
          <Section style={{ padding: "40px 0 32px" }}>
            <Text
              style={{
                margin: 0,
                fontSize: 34,
                fontWeight: 700,
                letterSpacing: "-0.045em",
                color: FG,
                lineHeight: "1.1",
              }}
            >
              New message
              <br />
              from {name}
            </Text>
          </Section>

          {/* Name */}
          <Section style={{ paddingBottom: 24, borderBottom: `1px solid ${DIVIDER}` }}>
            <Text style={{ margin: "0 0 6px", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>
              Name
            </Text>
            <Text style={{ margin: 0, fontSize: 16, color: FG }}>{name}</Text>
          </Section>

          {/* Email */}
          <Section style={{ padding: "24px 0", borderBottom: `1px solid ${DIVIDER}` }}>
            <Text style={{ margin: "0 0 6px", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>
              Email
            </Text>
            <Link
              href={`mailto:${email}`}
              style={{ fontSize: 16, color: FG, textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              {email}
            </Link>
          </Section>

          {/* Message */}
          <Section style={{ padding: "24px 0 44px" }}>
            <Text style={{ margin: "0 0 12px", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>
              Message
            </Text>
            <Text
              style={{
                margin: 0,
                fontSize: 15,
                color: "rgba(245,242,236,0.85)",
                lineHeight: "1.75",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </Section>

          {/* Reply CTA */}
          <Section style={{ paddingBottom: 48 }}>
            <Button
              href={`mailto:${email}?subject=Re%3A%20Your%20message`}
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
              Reply ↗
            </Button>
          </Section>

          {/* Footer */}
          <Hr style={{ borderColor: DIVIDER, margin: "0 0 32px" }} />
          <Text style={{ margin: 0, fontSize: 12, color: "rgba(245,242,236,0.22)" }}>
            Sent via mohammedanzil.in
          </Text>

        </Container>
      </Body>
    </Html>
  );
}
