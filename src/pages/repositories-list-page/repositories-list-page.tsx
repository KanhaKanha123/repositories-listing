import { FC, ReactElement } from "react";
import { RepositoriesList } from "../../components";
import { PageWrapper } from "./repositories-list-page.styled";

/**
 * This component is responsible render the repositories list page on router request.
 * @returns ReactElement
 */
export const RepositoriesListPage: FC = (): ReactElement => <PageWrapper><RepositoriesList /></PageWrapper>
