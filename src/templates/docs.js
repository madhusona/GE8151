import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import { Layout, Link } from '$components';
import NextPrevious from '../components/NextPrevious';
import config from '../../config';
import { Edit, StyledHeading, StyledMainWrapper } from '../components/styles/Docs';

const forcedNavOrder = config.sidebar.forcedNavOrder;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return null;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title },
      },
    } = data;

    const gitHub = require('../components/images/github.svg');

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter(slug => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          if (config.gatsby && config.gatsby.trailingSlash) {
            prefix = prefix + '/';
          }

          if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map(slug => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;

    const metaDescription = mdx.frontmatter.metaDescription;

    let canonicalUrl = config.gatsby.siteUrl;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <div className={'titleWrapper'}>
          <StyledHeading>{mdx.fields.title}</StyledHeading>
          <Edit className={'mobileView'}>
            {docsLocation && (
              <Link className={'gitBtn'} to={`${docsLocation}/${mdx.parent.relativePath}`}>
                <img src={gitHub} alt={'Github logo'} /> Edit on GitHub
              </Link>
            )}
          </Edit> 
        </div>
        <StyledMainWrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </StyledMainWrapper>
        <div className={'addPaddTopBottom'}>
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
        <StyledMainWrapper>
          <div>
            <h2>References</h2>
            <ul>
              <li>Allen B. Downey, “Think Python: How to Think Like a Computer Scientist‘‘, 2nd edition,
Updated for Python 3, Shroff/O‘Reilly Publishers, 2016 (http://greenteapress.com/wp/thinkpython/)</li>
              <li>Guido van Rossum and Fred L. Drake Jr, ―An Introduction to Python – Revised and
updated for Python 3.2, Network Theory Ltd., 2011.</li>
<li> John V Guttag, ―Introduction to Computation and Programming Using Python‘‘, Revised
and expanded Edition, MIT Press , 2013</li>
<li>Robert Sedgewick, Kevin Wayne, Robert Dondero, ―Introduction to Programming in
Python: An Inter-disciplinary Approach, Pearson India Education Services Pvt. Ltd., 2016.</li>
<li>Timothy A. Budd, ―Exploring Python‖, Mc-Graw Hill Education (India) Private Ltd.,, 2015.
4. Kenneth A. Lambert, ―Fundamentals of Python: First Programs‖, CENGAGE Learning,
2012.</li>  
<li>Charles Dierbach, ―Introduction to Computer Science using Python: A Computational
Problem-Solving Focus, Wiley India Edition, 2013.</li> 
<li> Paul Gries, Jennifer Campbell and Jason Montojo, ―Practical Programming: An Introduction
to Computer Science using Python 3‖, Second edition, Pragmatic Programmers, LLC,
2013.</li>
        </ul>
        
          </div>
          </StyledMainWrapper>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;
