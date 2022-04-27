import { Box, Divider, Grid, Tab, Tabs } from "@mui/material";
import LaunchpageTeamMemberCard from "components/Pages/LaunchpadEntry/components/LaunchPageTeamMemberCard";
import MarkdownParser from "components/Reusable/MarkdownParser";
import SocialList from "components/Reusable/SocialList";
import { useState } from "react";
import { ICollectionEntryDataType } from "../CollectionEntry";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 1, py: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `darkTerminalTab-tab-${index}`,
    "aria-controls": `darkTerminalTab-tabpanel-${index}`,
  };
}

export type CollectionEntryHeaderTabsAndSocialPropsType = {
  data: ICollectionEntryDataType;
};

const CollectionEntryHeaderTabsAndSocial: React.FC<
  CollectionEntryHeaderTabsAndSocialPropsType
> = ({ data }) => {
  const { discord, siteUrl, twitter, teamMembers, roadmap } = data;

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabStyles = {
    fontSize: "0.9rem",
    py: [0, 0, 1],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const innerTabStyles = {
    backgroundColor: `rgba(0,0,0,0.16)`,
  };

  // *************** RENDER *************** //
  return (
    <Box>
      <Grid container spacing={[1.5, 1.5, 2.5]}>
        <Grid item xs={12} sm={6} lg={9}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Dark Terminal Content Tabs"
            scrollButtons="auto"
            variant="scrollable"
          >
            {roadmap && (
              <Tab
                sx={{
                  ...innerTabStyles,
                }}
                label={
                  <Box
                    sx={{
                      ...TabStyles,
                      color: value === 0 ? "common.white" : "primary.light",
                    }}
                  >
                    ROADMAP
                  </Box>
                }
                {...a11yProps(0)}
              />
            )}
            {teamMembers && teamMembers.length > 0 && (
              <Tab
                sx={{
                  ...innerTabStyles,
                }}
                label={
                  <Box
                    sx={{
                      ...TabStyles,
                      color: value === 1 ? "common.white" : "primary.light",
                    }}
                  >
                    TEAM
                  </Box>
                }
                {...a11yProps(1)}
              />
            )}
          </Tabs>
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <SocialList
              discord={discord}
              twitter={twitter}
              website={siteUrl}
              sx={{ display: "inline-flex" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ my: [1.5, 1.5, 2] }} />
      <Box>
        {roadmap && (
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                maxWidth: "100%",
                overflow: "hidden",
                wordWrap: "break-word",
                fontWeight: 300,
              }}
            >
              <MarkdownParser>{roadmap}</MarkdownParser>
            </Box>
          </TabPanel>
        )}
        {teamMembers && teamMembers.length > 0 && (
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                maxWidth: "100%",
                overflow: "hidden",
                wordWrap: "break-word",
                fontWeight: 300,
              }}
            >
              <Grid container spacing={[2, 2, 3]}>
                {teamMembers.map((member: any) => (
                  <Grid item key={member.name} xs={12} sm={6} md={4} lg={3}>
                    <LaunchpageTeamMemberCard data={member} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </TabPanel>
        )}
      </Box>
    </Box>
  );
};

export default CollectionEntryHeaderTabsAndSocial;
