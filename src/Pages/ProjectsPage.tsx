import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import SquareBorderBox from "components/Reusable/Layout/SquareBorderBox";

export type ProjectsPagePropsType = {
  children?: any;
};

const ProjectsPage: React.VFC<ProjectsPagePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return (
    <PageWithNavWrapper>
      <SquareBorderBox
        sx={{
          mt: 3,
        }}
      >
        ProjectsPage Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum labore, unde vel nemo explicabo natus consectetur praesentium,
        alias voluptatum, blanditiis enim? Fuga, saepe aut commodi quae eveniet
        inventore iure, aspernatur eos, harum recusandae qui ipsam! Maiores ab
        aperiam unde cumque.
      </SquareBorderBox>
    </PageWithNavWrapper>
  );
};

export default ProjectsPage;
