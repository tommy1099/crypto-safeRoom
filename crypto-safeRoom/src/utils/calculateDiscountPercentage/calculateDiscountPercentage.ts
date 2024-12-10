function calculateDiscountPercentage(originalPrice: number, discountedPrice: number): number {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = Math.floor((discount / originalPrice) * 100);
    return discountPercentage;
}
export default calculateDiscountPercentage;