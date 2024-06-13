export const defineMeta = (
    {
        // name = "", // not necessary as the filename is id which is a slug
        id = "", // a slug unique to this sketch
        type = "p5js",
        name = "",
        description = "",
        status = "draft",
        posterUrl = "",
        audioUrl = false,
        usePagination = false,
        variants = [], // foreach use defineVariant()
    } ) => (
    {
        id,
        type,
        name,
        description,
        status,
        posterUrl,
        audioUrl,
        usePagination,
    }
)


export const meta = defineMeta( {
    id: `test`,
    name: `Test`,
} )

export const create = async ( { p5, canvas, notify } ) => {
    return new p5( sketch( { notify } ), canvas )
}

const sketch = ( { notify } ) => p => {

    p.setup = () => {
        p.createCanvas( 600, 600 )
        p.background( 128 )
        notify.loaded( p )
    }

    p.draw = () => {
        p.circle( p.width / 2, p.height / 2, 25 )
        p.noLoop()
        notify.ended()
    }

}
