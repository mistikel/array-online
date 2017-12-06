/**
 * Menu data mock
 */
export class MenuMock {
  static navigation = [
    {
      name: 'People',
      title: 'People',
      faIcon: 'fa-users',
      link: '/people',
      sub: [
        {
          name: 'All People',
          title: 'All People',
          link: '/people'
        },
        {
          name: 'Add New Person',
          title: 'Add New Person',
          link: '/people/add'
        }
      ]
    },
    {
      name: 'Properties',
      title: 'Properties',
      matIcon: 'home',
      link: '/property',
      sub: [
        {
          name: 'All Properties',
          title: 'All Properties',
          link: '/property'
        },
        {
          name: 'Add new Properties',
          title: 'Add New Property',
          link: '/property/add'
        }
      ]
    }
  ];

  static admin = [
    {
      name: 'users',
      title: 'Users',
      faIcon: 'fa-user',
      link: '/users',
      sub: [
        {
          name: 'All Users',
          title: 'All Users',
          link: '/users'
        },
        {
          name: 'Add new Users',
          title: 'Add New User',
          link: '/user/add'
        }
      ]
    }
  ]
}
