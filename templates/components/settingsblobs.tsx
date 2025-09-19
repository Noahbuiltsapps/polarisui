import {
  Card,
  Text,
  BlockStack,
  InlineStack,
  Icon,
  Layout,
} from "@shopify/polaris";
import { Link as RemixLink } from "@remix-run/react";
import { SettingsIcon, EmailIcon } from "@shopify/polaris-icons";

export const SettingsBlobs = () => {
  const settingsCards = [
    {
      icon: SettingsIcon,
      title: "General",
      description: "Manage your general settings.",
      url: "/app/settings-general",
      disabled: false,
      hideicon: false,
    },
    {
      icon: EmailIcon,
      title: "Email",
      description: "Manage your email settings & built templates.",
      url: "/app/settings-email",
      disabled: false,
      hideicon: false,
    },
  ];

  return (
    <Layout.Section>
      <BlockStack gap="300">
        {Array.from({ length: Math.ceil(settingsCards.length / 2) }).map(
          (_, rowIndex) => {
            const rowCards = settingsCards.slice(
              rowIndex * 2,
              rowIndex * 2 + 2,
            );
            return (
              <InlineStack key={rowIndex} gap="500">
                {rowCards.map((card, index) => (
                  <div key={rowIndex * 2 + index} style={{ flex: 1 }}>
                    {card.disabled ? (
                      <Card>
                        <InlineStack gap="300">
                          {!card.hideicon && (
                            <InlineStack>
                              <Icon source={card.icon} tone="subdued" />
                            </InlineStack>
                          )}
                          <BlockStack gap="0">
                            <Text
                              as="h2"
                              variant="headingMd"
                              fontWeight="semibold"
                              tone="subdued"
                            >
                              {card.title} (soon)
                            </Text>
                            <Text as="p" variant="bodyMd" tone="subdued">
                              {card.description}
                            </Text>
                          </BlockStack>
                        </InlineStack>
                      </Card>
                    ) : (
                      <RemixLink
                        to={card.url}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "block",
                        }}
                      >
                        <Card>
                          <InlineStack gap="300">
                            {!card.hideicon && (
                              <InlineStack>
                                <Icon source={card.icon} />
                              </InlineStack>
                            )}
                            <BlockStack gap="0">
                              <Text
                                as="h2"
                                variant="headingMd"
                                fontWeight="semibold"
                              >
                                {card.title}
                              </Text>
                              <Text as="p" variant="bodyMd" tone="subdued">
                                {card.description}
                              </Text>
                            </BlockStack>
                          </InlineStack>
                        </Card>
                      </RemixLink>
                    )}
                  </div>
                ))}
                {rowCards.length === 1 && <div style={{ flex: 1 }} />}
              </InlineStack>
            );
          },
        )}
      </BlockStack>
    </Layout.Section>
  );
};
