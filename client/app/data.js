const categories = [
    { id: '1', title: 'All' },
    { id: '2', title: 'Women' },
    { id: '3', title: 'Inside Pics' },
    { id: '4', title: 'Outside Pics' },
    { id: '5', title: 'Shopping' },
  ];

const WomenCategory = [
    { id: '1', uri: 'https://images.unsplash.com/photo-1617039487629-6babdcb2a24b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', uri: 'https://images.unsplash.com/photo-1547635289-f3a1a2078969?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },    
]

const InsideCategory = [
    { id: '3', uri: 'https://images.unsplash.com/photo-1687825464210-45d4f6b6f564?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', uri: 'https://images.unsplash.com/photo-1659029691699-1c8715601cf3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },    
]

const OutsideCategory = [
    { id: '5', uri: 'https://plus.unsplash.com/premium_photo-1664442991349-4003e8ba2405?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '6', uri: 'https://images.unsplash.com/photo-1724710152067-f5cda1ed9820?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '7', uri: 'https://images.unsplash.com/photo-1617039487629-6babdcb2a24b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

const ShoppingCategory = [
    { id: '8', uri: 'https://images.unsplash.com/photo-1547635289-f3a1a2078969?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '9', uri: 'https://images.unsplash.com/photo-1687825464210-45d4f6b6f564?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '10', uri: 'https://images.unsplash.com/photo-1659029691699-1c8715601cf3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '11', uri: 'https://plus.unsplash.com/premium_photo-1664442991349-4003e8ba2405?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '12', uri: 'https://images.unsplash.com/photo-1724710152067-f5cda1ed9820?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  
]
const photos = [
    { id: '1', uri: 'https://images.unsplash.com/photo-1617039487629-6babdcb2a24b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', uri: 'https://images.unsplash.com/photo-1547635289-f3a1a2078969?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', uri: 'https://images.unsplash.com/photo-1687825464210-45d4f6b6f564?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', uri: 'https://images.unsplash.com/photo-1659029691699-1c8715601cf3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    export {
        categories,
        WomenCategory,
        InsideCategory,
        OutsideCategory,
        ShoppingCategory,
        photos
    };