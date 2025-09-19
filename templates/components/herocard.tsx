import {
    Layout,
    BlockStack,
    Card,
    Text,
    InlineStack,
    Button,
    Thumbnail,
  } from "@shopify/polaris";
  
  export const HeroCard = () => {
    return (
      <Layout.Section>
        <Card padding="800">
          <BlockStack gap="300" align="center">
            <InlineStack align="center">
              <Thumbnail source="/favicon.ico" alt="logo" size="small" />
            </InlineStack>
            <Text as="h2" variant="headingMd" alignment="center">
              Welcome back 👋 Keep your shelves stocked and your sales flowing
            </Text>
            <Text as="p" variant="bodyMd" alignment="center">
              Stay ahead of demand with proactive forecasting and real-time
              insights <br />— so you can focus on growing, not guessing.
            </Text>
            <InlineStack align="center" gap="200">
              <Button variant="primary" size="medium" url="/app/forecast?new">
                New Forecast
              </Button>
              <Button variant="secondary" size="medium" url="/app/forecast">
                View Forecast
              </Button>
            </InlineStack>
          </BlockStack>
        </Card>
      </Layout.Section>
    );
  };
  