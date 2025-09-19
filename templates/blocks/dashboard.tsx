import { Card, Layout, Page, Text, BlockStack, InlineStack, Button, Thumbnail, Icon, Divider, InlineGrid } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { EmailIcon, MoneyIcon, PriceListIcon, StarIcon, ArrowUpIcon, CartIcon } from "@shopify/polaris-icons";
import Campaignstable from "../components/campainstable";
import { PartnerApps } from "../components/partnerapps";

export default function Dashboard() {

	const highlights = [
		{
			icon: CartIcon,
			label: "Upsell campaigns:",
			value: "12",
		},
		{
			icon: ArrowUpIcon,
			label: "Conversion rate:",
			value: "23.4%",
		},
		{
			icon: MoneyIcon,
			label: "Revenue increase:",
			value: "+$4,250",
		},
		{
			icon: StarIcon,
			label: "Avg order value:",
			value: "$127.50",
		},
	] as const;

  return (
    <Page>
      <TitleBar title="Upsell Dashboard" />
      <Layout>
        <Layout.Section>
          <Card padding="800">
            <BlockStack gap="300" align="center">
              <InlineStack align="center">
                <Thumbnail
                  source="/favicon.ico"
                  alt="Upsell App Logo"
                  size="small"
                />
              </InlineStack>
              <Text as="h2" variant="headingMd" alignment="center">
                Welcome back 👋 Boost your revenue with smart upsells
              </Text>
              <Text as="p" variant="bodyMd" alignment="center">
                Increase your average order value with AI-powered product recommendations <br />— turn every customer into a high-value buyer.
              </Text>
              <InlineStack align="center" gap="200">
                <Button variant="primary" size="medium" url="/app/campaigns?new">
                  Create Campaign
                </Button>
								<Button variant="secondary" size="medium" url="/app/campaigns">
									View Campaigns
								</Button>
              </InlineStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card padding="400">
						<InlineGrid columns={4} gap="300" alignItems="center">
						{highlights.map((item) => (
								<BlockStack key={item.label} gap="100" align="center">
								<Icon source={item.icon} />
								<Text as="p" variant="bodyMd" alignment="center">
										<b>{item.label}</b> {item.value}
								</Text>
								</BlockStack>
						))}
						</InlineGrid>
					</Card>
        </Layout.Section>
				<Campaignstable />
        <Layout.Section>
            <Card padding="400">
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd" fontWeight="semibold">Account & Support</Text>
                  <BlockStack gap="300">
                  <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="300" blockAlign="center">
                      <Icon source={PriceListIcon}/>
                      <BlockStack gap="050">
                        <Text as="p" variant="bodyMd" fontWeight="semibold">Starter Plan</Text>
                        <Text as="p" variant="bodySm" tone="subdued">$29.99 every 30 days. Upgrade to Pro for advanced AI recommendations and unlimited campaigns.</Text>
                      </BlockStack>
                    </InlineStack>
                    <Button url="/app/settings">Manage</Button>
                  </InlineStack>
                  <Divider />
                  <InlineStack align="space-between" blockAlign="center">
                    <InlineStack gap="300" blockAlign="center">
                      <Icon source={EmailIcon}/>
                      <BlockStack gap="025">
                        <Text as="p" variant="bodyMd" fontWeight="semibold">Support</Text>
                        <Text as="p" variant="bodySm" tone="subdued">Get help with campaign optimization and technical support.</Text>
                      </BlockStack>
                    </InlineStack>
                    <Button url="/app/settings">Contact</Button>
                  </InlineStack>
                  </BlockStack>
              </BlockStack>
            </Card>
          </Layout.Section>
					<PartnerApps />
      </Layout>
    </Page>
  );
}