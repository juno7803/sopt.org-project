import { Category, ServiceType } from '@/components/project/upload/types';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql, rest } from 'msw';
import ProjectCard from './ProjectCard';

export default {
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const THUMBNAIL_IMAGE = 'https://dummyimage.com/368x208/8040ff/ffffff';
const LOGO_IMAGE = 'https://dummyimage.com/120x120/8040ff/ffffff';

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />;

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  name: '핸디캔디',
  generation: 28,
  category: Category.APPJAM,
  summary: '핸디캔디로 미래의 나에게 보상을 설정해 보아요',
  thumbnailIamge: THUMBNAIL_IMAGE,
  logoImage: LOGO_IMAGE,
  serviceType: [ServiceType.APP, ServiceType.WEB],
  links: [
    { title: 'website', url: 'zigzag.kr' },
    { title: 'appStore', url: 'zigzag.kr' },
    { title: 'googlePlay', url: 'zigzag.kr' },
  ],
};
Thumbnail.storyName = '썸네일 이미지';

export const Logo = Template.bind({});
Logo.args = {
  name: '핸디캔디',
  generation: 28,
  category: Category.APPJAM,
  summary: '핸디캔디로 미래의 나에게 보상을 설정해 보아요',
  logoImage: LOGO_IMAGE,
  serviceType: [ServiceType.WEB],
  links: [{ title: 'website', url: 'zigzag.kr' }],
};
Logo.storyName = '로고 이미지';
