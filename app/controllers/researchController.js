//Pásztor László, II/E, 2025-10-22

const ResearchController ={
    index: (req, res) => {
        res.json({
            crud: "read",
            name: "Pásztor László, II/E, 2025-10-22",
            success: true
        })
    },
    store: (req, res) => {
        res.json({
            crud: "create",
            name: "Pásztor László, II/E, 2025-10-22",
            success: true
        })
    },
    update: (req, res) => {
        res.json({
            crud: "update",
            name: "Pásztor László, II/E, 2025-10-22",
            success: true
        })
    },
    destroy: (req, res) => {
        res.json({
            crud: "delete",
            name: "Pásztor László, II/E, 2025-10-13",
            success: true
        })
    }
}

export default ResearchController
