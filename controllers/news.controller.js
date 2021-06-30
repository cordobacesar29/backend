// get a news entry by ID
const getNewsById = async (req, res) => {
	const { id } = req.params.id;

	try {
		const newsEntry = await models.Entry.findOne({
			where: { id: id },
			include: 'category',
		});

		return res.status(200).json({ message: 'success', newsEntry });
	} catch (error) {
		return res.status(401).json({
			status: 'failed',
			message: 'no news found with the given ID.',
		});
	}
};

module.exports = { getNewsById };
