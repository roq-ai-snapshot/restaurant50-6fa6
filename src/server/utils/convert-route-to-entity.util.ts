const mapping: Record<string, string> = {
  'menu-items': 'menu_item',
  orders: 'order',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
