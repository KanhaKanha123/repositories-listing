import { Link, Icon, IconLabelWrapper } from "../components";
import star from "../asset/icons/star.jpg";
import fork from "../asset/icons/fork.png";

export const useRepositories = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string, dataList: any) => (
        <Link href={dataList.url} target="_blank">
          {name}
        </Link>
      ),
    },
    {
      title: () => (
        <IconLabelWrapper>
          <Icon
            url={star}
            altText="stars header column title image here"
            width="24px"
            height="24px"
          ></Icon>
          <span>Starts</span>
        </IconLabelWrapper>
      ),
      dataIndex: "stargazerCount",
      key: "stargazerCount",
      render: (stargazerCount: string) => (
        <IconLabelWrapper>
          <Icon
            url={star}
            altText="star image here"
            width="24px"
            height="24px"
          ></Icon>
          <span>{stargazerCount}</span>
        </IconLabelWrapper>
      ),
    },
    {
      title: () => (
        <IconLabelWrapper>
          <Icon
            url={fork}
            altText="forks header column title image here"
            width="24px"
            height="24px"
          ></Icon>
          <span>Forks</span>
        </IconLabelWrapper>
      ),
      dataIndex: "forkCount",
      key: "forkCount",
      render: (forkCount: string) => (
        <IconLabelWrapper>
          <Icon
            url={fork}
            altText="fork image here"
            width="24px"
            height="24px"
          ></Icon>
          <span>{forkCount}</span>
        </IconLabelWrapper>
      ),
    },
  ];

  return [columns];
};
