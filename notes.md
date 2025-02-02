# Notes

## file extensions

.ts --> data files
.tsx --> components

## "use client" 
Düz HTML olan sayfalarda --> Yükü server alıyor.
Dinamik sayfalarda --> "use client" kullan! Yükü browser alıyor. 

## export VS export default 

// export X --> import { X } from ""
// export default X --> import X as Y from "" 

## Props

```tsx
export function functionName({items}:type) {
items. 
}
```

```tsx
export function functionName(props:type) {
props.items.
}
```


items: {
  title: "Dashboard",
  url: "#",
  icon: "Home",
}

colors: {

}