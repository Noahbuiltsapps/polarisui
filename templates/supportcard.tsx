import {
  Card,
  Layout,
  Text,
  BlockStack,
  InlineStack,
  TextField,
  Button,
  DropZone,
  LegacyStack,
  Thumbnail,
} from "@shopify/polaris";
import { NoteIcon, DeleteIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

export const SupportCard = () => {
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleDropZoneDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) =>
      setFiles((files) => [...files, ...acceptedFiles]),
    [],
  );

  const validImageTypes = ["image/jpg", "image/jpeg", "image/png"];

  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <div style={{ padding: "0" }}>
      <LegacyStack vertical>
        {files.map((file, index) => (
          <LegacyStack alignment="center" key={index}>
            <Thumbnail
              size="small"
              alt={file.name}
              source={
                validImageTypes.includes(file.type)
                  ? window.URL.createObjectURL(file)
                  : NoteIcon
              }
            />
            <div>
              {file.name}{" "}
              <Text variant="bodySm" as="p">
                {file.size} bytes
              </Text>
            </div>
            <Button
              variant="plain"
              icon={DeleteIcon}
              onClick={() => handleRemoveFile(index)}
            />
          </LegacyStack>
        ))}
      </LegacyStack>
    </div>
  );

  const handleRemoveFile = useCallback((index: number) => {
    setFiles((files) => files.filter((_, i) => i !== index));
  }, []);

  return (
    <Layout.Section>
      <Card>
        <BlockStack gap="400">
          <Text as="h2" variant="headingMd" fontWeight="semibold">
            Support
          </Text>
          <BlockStack gap="300">
            <TextField
              label="Subject"
              value={contactSubject}
              onChange={setContactSubject}
              placeholder="Brief description of your issue..."
              autoComplete="off"
            />
            <TextField
              label="Message"
              value={contactMessage}
              onChange={setContactMessage}
              multiline={4}
              placeholder="Describe your issue or question..."
              autoComplete="off"
            />
            <BlockStack gap="200">
              <DropZone onDrop={handleDropZoneDrop}>
                {uploadedFiles}
                {fileUpload}
              </DropZone>
            </BlockStack>
            <InlineStack gap="200">
              <Button variant="primary" size="medium">
                Send Message
              </Button>
            </InlineStack>
          </BlockStack>
        </BlockStack>
      </Card>
    </Layout.Section>
  );
};
