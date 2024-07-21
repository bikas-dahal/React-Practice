export default function ({params}) {
    return (
        <div>
        <h1>Meals</h1>
        <p>Discover delicious meals shared by our community.</p>
        {params.slug}
        </div>
    );
}