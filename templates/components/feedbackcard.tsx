import {
  Card,
  BlockStack,
  Text,
  Button,
  ButtonGroup,
  InlineStack,
  Layout,
} from "@shopify/polaris";
import { XIcon, ThumbsDownIcon, ThumbsUpIcon } from "@shopify/polaris-icons";
import { useState } from "react";

export const FeedbackCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  return isVisible ? (
    <Layout.Section>
      <Card>
        {!feedbackSubmitted ? (
          <BlockStack gap="400" align="start">
            <BlockStack gap="200">
              <InlineStack align="space-between">
                <Text as="h2" variant="headingMd">
                  Share your feedback
                </Text>
                <XIcon
                  width="1rem"
                  height="1rem"
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsVisible(false)}
                />
              </InlineStack>
              <Text as="p" variant="bodyMd" tone="subdued">
                How would you describe your experience using PolarisUI?
              </Text>
            </BlockStack>
            <ButtonGroup>
              <Button
                icon={ThumbsUpIcon}
                onClick={() => setFeedbackSubmitted(true)}
              >
                {" "}
                {/* Call a function / api here to save the feedback */}
                Good
              </Button>
              <Button
                icon={ThumbsDownIcon}
                onClick={() => setFeedbackSubmitted(true)}
              >
                {" "}
                {/* Call a function / api here to save the feedback */}
                Bad
              </Button>
            </ButtonGroup>
          </BlockStack>
        ) : (
          <InlineStack align="space-between">
            <Text as="p" variant="bodyMd" fontWeight="semibold">
              Thanks for your feedback!
            </Text>
            <XIcon
              width="1rem"
              height="1rem"
              style={{ cursor: "pointer" }}
              onClick={() => setIsVisible(false)}
            />
          </InlineStack>
        )}
      </Card>
    </Layout.Section>
  ) : null;
};
