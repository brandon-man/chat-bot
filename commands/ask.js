const { SlashCommandBuilder } = require("discord.js");
const { ask } = require("../ai");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Chat with Open AI!")
    .addStringOption((option) =>
      option.setName("prompt").setDescription("Ask a question")
    ),

  options: [
    {
      name: "prompt",
      description: "Replies to your prompt!",
      type: "string",
      required: true,
    },
  ],
  async execute(interaction) {
    const prompt = interaction.options.getString("prompt");
    console.log(prompt);
    if (prompt == null) {
      await interaction.reply("Prompt must exist.");
      return;
    }

    const answer = await ask(prompt);
    await interaction.reply(answer);
  },
};
