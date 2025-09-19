import {
  Layout,
  BlockStack,
  Card,
  InlineGrid,
  Icon,
  Text,
} from "@shopify/polaris";
import {
  AlertTriangleIcon,
  ChartLineIcon,
  MoneyIcon,
  ProductIcon,
} from "@shopify/polaris-icons";

const highlights = [
  {
    icon: ChartLineIcon,
    label: "Scanned products:",
    value: "732",
  },
  {
    icon: AlertTriangleIcon,
    label: "Products to reorder:",
    value: "173",
  },
  {
    icon: ProductIcon,
    label: "Total units:",
    value: "1.938 units",
  },
  {
    icon: MoneyIcon,
    label: "Estimated cost:",
    value: "12.165,81 €",
  },
  
] as const;

export const HighlightCard = () => {
  return (
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
  );
};
