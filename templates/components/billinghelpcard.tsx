import {
  Card,
  Text,
  BlockStack,
  InlineStack,
  Button,
  Icon,
  Divider,
  Layout,
} from "@shopify/polaris";
import { EmailIcon, PriceListIcon } from "@shopify/polaris-icons";

const billingItems = [
  {
    title: "Free Plan",
    description: "$0.00 every 30 days. Upgrade to a paid plan with a free 7-day trial to unlock all features.",
    icon: PriceListIcon,
    buttonLabel: "Manage",
    url: "/app/settings",
  },
  {
    title: "Support",
    description: "Contact our help team for additional support.",
    icon: EmailIcon,
    buttonLabel: "Contact",
    url: "/app/settings",
  },
] as const;

export const BillingHelpCard = () => {
  return (
    <Layout.Section>
      <Card padding="400">
        <BlockStack gap="400">
          <Text as="h2" variant="headingMd" fontWeight="semibold">
            Billing & Help
          </Text>
          <BlockStack gap="300">
            {billingItems.map((item, index) => (
              <>
                <InlineStack key={item.title} align="space-between" blockAlign="center">
                  <InlineStack gap="300" blockAlign="center">
                    <Icon source={item.icon} />
                    <BlockStack gap="050">
                      <Text as="p" variant="bodyMd" fontWeight="semibold">
                        {item.title}
                      </Text>
                      <Text as="p" variant="bodySm" tone="subdued">
                        {item.description}
                      </Text>
                    </BlockStack>
                  </InlineStack>
                  <Button url={item.url}>{item.buttonLabel}</Button>
                </InlineStack>
                {index < billingItems.length - 1 ? <Divider /> : null}
              </>
            ))}
          </BlockStack>
        </BlockStack>
      </Card>
    </Layout.Section>
  );
};
