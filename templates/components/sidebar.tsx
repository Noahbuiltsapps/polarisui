import {
  Layout,
  BlockStack,
  Card,
  Text,
  Icon,
  InlineStack,
  Divider,
} from "@shopify/polaris";
import { ExportIcon, ImportIcon, AdjustIcon, AppExtensionIcon, SettingsIcon, ChartLineIcon, ChartPopularIcon } from "@shopify/polaris-icons";

const sections = [
  {
    header: "Reviews",
    items: [
      { icon: ImportIcon, title: "Import reviews" },
      { icon: ExportIcon, title: "Export reviews" },
      { icon: AdjustIcon, title: "Manage reviews" },
    ],
  },
  {
    header: "Settings",
    items: [
      { icon: SettingsIcon, title: "Settings" },
      { icon: AppExtensionIcon, title: "Integrations" },
    ],
  },
  {
    header: "Analytics",
    items: [
      { icon: ChartLineIcon, title: "Overview" },
      { icon: ChartPopularIcon, title: "Trends" },
      { icon: ExportIcon, title: "Exports" },
    ],
  },
  {
    header: "Help",
    items: [
      { icon: AppExtensionIcon, title: "Documentation" },
      { icon: SettingsIcon, title: "Contact support" },
      { icon: ImportIcon, title: "Getting started" },
    ],
  },
];

export const Sidebar = () => {
  return (
    <Layout.Section variant="oneThird">
      <Card>
        <BlockStack gap="400" align="start">
          {sections.map((section, sectionIndex) => (
            <BlockStack key={section.header} gap="400">
              <Text as="h2" variant="headingMd">
              {section.header}
              </Text>
                <BlockStack gap="200" align="start">
                  {section.items.map((item, itemIndex) => (
                      <InlineStack blockAlign='center'>
                        <InlineStack key={`${section.header}-${itemIndex}`} align='start' gap='100'>
                        <Icon source={item.icon} />
                        <Text as='p' variant='bodyMd'>
                          {item.title}
                        </Text>
                      </InlineStack>
                    </InlineStack>
                  ))}
                </BlockStack>
              {sectionIndex < sections.length - 1 && <Divider />}
            </BlockStack>
          ))}
        </BlockStack>
      </Card>
    </Layout.Section>
  );
};