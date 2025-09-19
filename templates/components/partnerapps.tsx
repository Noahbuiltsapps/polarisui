import {
    Layout,
    Text,
    Card,
    Button,
    BlockStack,
    InlineStack,
    Thumbnail,
    Divider,
  } from "@shopify/polaris";
  
  const partnerApps = [
    {
      name: "Replo Landing-Page Builder",
      description: "No-Code easy to use Page Builder for Shopify to boost your conversion rate.",
      url: "https://apps.shopify.com/alchemy",
      logo: "/replo-logo.webp",
    },
    {
      name: "Loox Reviews",
      description: "Collect photo, video and store reviews to build trust with visual social proof.",
      url: "https://apps.shopify.com/loox",
      logo: "/loox-logo.webp",
    },
    {
      name: "Skio Subscriptions",
      description: "Easy subscriptions with no hidden fees and integrated AI retention tools.",
      url: "https://apps.shopify.com/skio",
      logo: "/skio-logo.webp",
    },
  ];
  
  export const PartnerApps = () => {
    return (
      <Layout.Section>
        <Card padding="400">
          <BlockStack gap="400">
            <Text as="h2" variant="headingMd" fontWeight="semibold">
              Partner apps
            </Text>
            <BlockStack gap="300">
              {partnerApps.map((app, index) => (
                <>
                  <InlineStack key={app.name} align="space-between" blockAlign="center">
                    <InlineStack gap="300" blockAlign="center">
                      <Thumbnail source={app.logo} alt={`${app.name} Logo`} size="small" />
                      <BlockStack gap="050">
                        <Text as="p" variant="bodyMd" fontWeight="semibold">
                          {app.name}
                        </Text>
                        <Text as="p" variant="bodySm" tone="subdued">
                          {app.description}
                        </Text>
                      </BlockStack>
                    </InlineStack>
                    <Button url={app.url} target="_blank" size="medium">
                      Install
                    </Button>
                  </InlineStack>
                  {index < partnerApps.length - 1 ? <Divider /> : null}
                </>
              ))}
            </BlockStack>
          </BlockStack>
        </Card>
      </Layout.Section>
    );
  };
  