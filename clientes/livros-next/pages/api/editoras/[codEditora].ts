
import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora  from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const codEditora = Number(req.query.codEditora);
            const nomeEditora = ControleEditora.getNomeEditora(codEditora);
            res.status(200).json({ nome: nomeEditora });
        } catch (error) {
            res.status(500).json({ error: 'Erro no servidor' });
        }
    } else {
        res.status(405).end();
    }
};