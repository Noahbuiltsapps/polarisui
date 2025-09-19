import { Badge, Button, IndexTable, InlineStack, LegacyCard, Layout, Text, useIndexResourceState, Card, BlockStack, Icon } from "@shopify/polaris";
import { EmailIcon, SearchIcon, EditIcon, PlayIcon, DeleteIcon, ExportIcon, PauseCircleIcon } from "@shopify/polaris-icons";
import { useState, useEffect } from "react";

function Campaignstable() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    
    const allCampaigns = [
      {
        id: 'UP001',
        name: 'Summer Collection Bundle',
        type: 'Product Bundle',
        status: 'Active',
        revenue: '$2,450',
        created: '2024-01-15',
      },
      {
        id: 'UP002',
        name: 'Accessory Upsell',
        type: 'Add-on',
        status: 'Draft',
        revenue: '$890',
        created: '2024-01-10',
        targetProduct: 'Baseball Cap',
        upsellProduct: 'Cap + Sunglasses'
      },
      {
        id: 'UP003',
        name: 'Size Upgrade',
        type: 'Size Upgrade',
        status: 'Active',
        revenue: '$1,680',
        created: '2024-01-08',
      },
      {
        id: 'UP004',
        name: 'Premium Material',
        type: 'Material Upgrade',
        status: 'Draft',
        revenue: '$0',
        created: '2024-01-20',
      },
      {
        id: 'UP005',
        name: 'Color Variety Pack',
        type: 'Bundle',
        status: 'Active',
        revenue: '$3,120',
        created: '2024-01-05',
      },
    ];
    
    const campaigns = allCampaigns;
    
    const resourceName = {
      singular: 'campaign',
      plural: 'campaigns',
    };
  
    const promotedBulkActions = [
      {
        content: 'Activate campaigns',
        onAction: () => {},
      },
      {
        content: 'Pause campaigns',
        onAction: () => {},
      },
    ];
    const bulkActions = [
      {
        icon: ExportIcon,
        content: 'Export',
        onAction: () => {},
      },
      {
        icon: DeleteIcon,
        content: 'Delete',
        tone: 'critical',
        onAction: () => {},
      },
    ];
  
    const {selectedResources, allResourcesSelected, handleSelectionChange} =
      useIndexResourceState(campaigns);

    function handleEdit() {}
    function handleDelete() {}
    function handleActivate() {}
    function handlePause() {}
  
    const rowMarkup = campaigns.map(
      (
        {id, name, type, status, revenue, created},
        index,
      ) => (
        <IndexTable.Row
          id={id}
          key={id}
          selected={selectedResources.includes(id)}
          position={index}
        >
          <IndexTable.Cell>
            <Text variant="bodyMd" fontWeight="bold" as="span">
              {name}
            </Text>
          </IndexTable.Cell>
          <IndexTable.Cell>
            <Text variant="bodyMd" as="span">
              {type}
            </Text>
          </IndexTable.Cell>
          <IndexTable.Cell>
            <Badge tone={status === 'Active' ? 'success' : 'info'}>
              {status}
            </Badge>
          </IndexTable.Cell>
          <IndexTable.Cell>{revenue}</IndexTable.Cell>
          <IndexTable.Cell>{created}</IndexTable.Cell>
          <IndexTable.Cell>
            <div onClick={(e) => e.stopPropagation()}>
              <InlineStack gap="100" align="end" direction="row">
                <Button
                  variant="plain"
                  size="micro"
                  icon={EditIcon}
                  onClick={handleEdit}
                  accessibilityLabel="Edit campaign"
                />
                {status === 'Draft' && (
                  <Button
                    variant="plain"
                    size="micro"
                    icon={PlayIcon}
                    onClick={handleActivate}
                    accessibilityLabel="Activate campaign"
                  />
                )}
                {status === 'Active' && (
                  <Button
                    variant="plain"
                    size="micro"
                    icon={PauseCircleIcon}
                    onClick={handlePause}
                    accessibilityLabel="Pause campaign"
                  />
                )}
                <Button
                  variant="plain"
                  size="micro"
                  tone="critical"
                  icon={DeleteIcon}
                  onClick={handleDelete}
                  accessibilityLabel="Delete campaign"
                />
              </InlineStack>
            </div>
          </IndexTable.Cell>
        </IndexTable.Row>
      ),
    );
  
    if (!isClient) {
      return (
        <Layout.Section>
          <Card>
            <BlockStack gap="200" align="center">
              <Icon source={SearchIcon} />
              <BlockStack gap="100" align="center">
                <Text as="h2" variant="headingMd" alignment="center">
                  Loading...
                </Text>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      );
    }

    return (
      <Layout.Section>
        <BlockStack gap="200">
          {campaigns.length === 0 ? (
            <Card>
              <BlockStack gap="200" align="center">
                <Icon source={SearchIcon} />
                <BlockStack gap="100" align="center">
                  <Text as="h2" variant="headingMd" alignment="center">
                    No campaigns found
                  </Text>
                  <Text as="p" variant="bodyMd" alignment="center">
                    Please create a new campaign or unhide campaigns.
                  </Text>
                </BlockStack>
              </BlockStack>
            </Card>
          ) : (
            <LegacyCard>
              <IndexTable
                resourceName={resourceName}
                itemCount={campaigns.length}
                selectedItemsCount={
                  allResourcesSelected ? 'All' : selectedResources.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                  {title: 'Campaign Name'},
                  {title: 'Type'},
                  {title: 'Status'},
                  {title: 'Revenue'},
                  {title: 'Created'},
                  {title: ''},
                ]}
                bulkActions={bulkActions}
                promotedBulkActions={promotedBulkActions}
              >
                {rowMarkup}
              </IndexTable>
            </LegacyCard>
          )}
        </BlockStack>
      </Layout.Section>
    );
  }

export default Campaignstable;