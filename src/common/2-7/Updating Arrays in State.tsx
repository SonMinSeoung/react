import { useState } from 'react';
import React = require('react');

interface Product {
id: number;
name: string;
count: number;
}

const initialProducts: Product[] = [
{
id: 0,
name: 'Baklava',
count: 1,
},
{
id: 1,
name: 'Cheese',
count: 5,
},
{
id: 2,
name: 'Spaghetti',
count: 2,
},
];

export default function ShoppingCart(): JSX.Element {
const [products, setProducts] = useState<Product[]>(initialProducts);

function handleIncreaseClick(productId: number) {
setProducts((prevProducts) =>
prevProducts.map((product) => {
if (product.id === productId) {
return {
...product,
count: product.count + 1,
};
} else {
return product;
}
})
);
}

return (
<ul>
{products.map((product) => (
<li key={product.id}>
{product.name} (<b>{product.count}</b>)
<button onClick={() => handleIncreaseClick(product.id)}>+</button>
</li>
))}
</ul>
);
}

/**
 * map() JS 문법 함수를 인자로받고 배열을 반환함
 * 단원 요약 : 
 * 배열을 상태에 넣을 수는 있지만 변경할 수는 없습니다.
    배열을 변경하는 대신 새 버전을 만들고 상태를 업데이트합니다.
    [...arr, newItem]배열 스프레드 구문을 사용하여 새 항목으로 배열을 만들 수 있습니다.
    filter()및 를 사용하여 map()필터링되거나 변환된 항목으로 새 배열을 만들 수 있습니다.
    Immer를 사용하여 코드를 간결하게 유지할 수 있습니다.
 */