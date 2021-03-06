// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import AuthErrors from './components/AuthErrors';
import Hero from './components/Hero';
import HeroText from './components/HeroText';
import SigninButtons from './components/SigninButtons';
import { githubUrl } from '../../shared/utils/routeHelpers';

type Props = {
  notice?: 'google-hd' | 'auth-error' | 'hd-not-allowed',
  lastSignedIn: string,
  googleSigninEnabled: boolean,
  slackSigninEnabled: boolean,
};

function Home(props: Props) {
  return (
    <span>
      <Helmet>
        <title>Outline - Team wiki & knowledge base</title>
      </Helmet>
      <Grid>
        <Hero id="signin">
          <AuthErrors notice={props.notice} />
          {process.env.TEAM_LOGO && <Logo src={process.env.TEAM_LOGO} />}
          <h1>Our team’s knowledge base</h1>
          <HeroText>
            Team wiki, documentation, meeting notes, playbooks, onboarding, work
            logs, brainstorming, & more…
          </HeroText>
          <p>
            <SigninButtons {...props} />
          </p>
          <p>
            <a href={githubUrl()}>Powered by Outline</a>
          </p>
        </Hero>
      </Grid>
    </span>
  );
}

const Logo = styled.img`
  height: 60px;
  border-radius: 4px;
`;

export default Home;
