import {
  Layout,
  BlockStack,
  Card,
  Select,
  TextField,
  Checkbox,
} from "@shopify/polaris";
import { useState } from "react";

export const Settings = () => {
  const [language, setLanguage] = useState("en");
  const [appName, setAppName] = useState("");
  const [showFeedbackCard, setShowFeedbackCard] = useState(false);
  const [showSettingsBlobs, setShowSettingsBlobs] = useState(false);

  return (
    <Layout.Section>
      <Layout.AnnotatedSection
        title="General Settings"
        description="Configure general settings for your app."
      >
        <Card>
          <BlockStack gap="400">
            <Select
              label="Language"
              options={[
                { label: "English", value: "en" },
                { label: "German", value: "de" },
              ]}
              value={language}
              onChange={(value) => setLanguage(value)}
            />
            <TextField
              label="App Name"
              value={appName}
              onChange={(value) => setAppName(value)}
              autoComplete="on"
              placeholder="Enter your app name"
            />
            <BlockStack gap="200">
              <Checkbox
                label="Show Feedback Card"
                checked={showFeedbackCard}
                onChange={(value) => setShowFeedbackCard(value)}
              />
              <Checkbox
                label="Show Settings Blobs"
                checked={showSettingsBlobs}
                onChange={(value) => setShowSettingsBlobs(value)}
              />
            </BlockStack>
          </BlockStack>
        </Card>
      </Layout.AnnotatedSection>
    </Layout.Section>
  );
};
