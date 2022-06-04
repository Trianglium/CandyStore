import { Leader } from './leader';

export const LEADERS: Leader[] = [
    {
      id: '0',
      name: 'Justine Omega',
      image: 'images/about/leadership/business-woman_long-hair.png',
      designation: 'Chief Epicurious Officer',
      abbr: 'CEO',
      featured: true,
      // tslint:disable-next-line:max-line-length
      description: 'Our CEO, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit massa, facilisis id sem a, tincidunt condimentum sem. Mauris a nulla est. Nulla commodo eget arcu et vehicula. Etiam rhoncus vitae tortor nec sodales.'
    },
    {
      id: '1',
      name: 'Amber Lucas',
      image: 'images/about/leadership/business-woman_short-hair.png',
      designation: 'Chief Taste Officer',
      abbr: 'CFO',
      featured: false,
      // tslint:disable-next-line:max-line-length
      description: 'Amber, our CTO, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit massa, facilisis id sem a, tincidunt condimentum sem. Mauris a nulla est. Nulla commodo eget arcu et vehicula. Etiam rhoncus vitae tortor nec sodales.'
    }
];
