var advJsonData = {"quiz":[{"QuestionId":"ECL3I82161","QuestionData":{"question_type":{"text":"open-ended"},"question_interaction":{"text":"clickable"},"question_layout":{"text":"vertical"},"question_stem":{"text":"<p class=\"noindent\" id=\"hozf3ce735ff3b433161fe168ca28b64\"><strong class=\"important\" id=\"qmaq1128827c3609239ee3f6529fa01c\"><a class=\"crossref\" id=\"ch13_exercise_97\" href=\"alw_9781319272463_EM_ans_ch13.xhtml#ch13-exer-97\">13.97<\/a> Residuals and other models.<\/strong> Refer to the previous exercise. Analyze the residuals from your analysis, and investigate the possibility of using quadratic and interaction terms as predictors. Write a report recommending a final model for this problem with a justification for your recommendation. <img class=\"decorative size-large inline\" role=\"presentation\" aria-hidden=\"true\" alt=\"\" id=\"vfdpc1bf8ab4e4481c81f3762455e365\" src=\"..\/..\/..\/..\/images\/psbe5e_13_pg_670_01.png\" \/><\/p>"},"question_hint":{"text":""},"question_title":{"text":"13.97 Residuals and other models. Refer to the previous exercise. Analyze the residuals from your analysis, and..."},"instruction_text":{"text":""},"response_type":{"text":"without-response"},"answer":{"text":"<p epub:type=\"answer\" class=\"answer noindent\" id=\"skmsd557e63d3c71d580ac84ebe4e3a2\"><strong class=\"important\" id=\"wzjq7786eeb0fd6247b5b0b42ada9e12\"><a class=\"crossref\" id=\"ch13-exer-97\" href=\"alw_9781319272463_ch13_05.xhtml#ch13_exercise_97\">13.97<\/a><\/strong> The Normal quantile plot shows a slight left-skew in the residuals. The residual plot for promotions looks good (random). The residual plot for Discount shows a slight curve and suggests a possible quadratic model. Investigating a quadratic term for discount and possible interaction terms shows that none of the interaction terms test significant. After removing these, the quadratic term for discount is significant <span class=\"math\" role=\"math\" tabindex=\"0\" id=\"alw_9781319272463_EM_ans_ch13EQ_0089.png\" aria-label=\"left parenthesis t equals 4.26 semicolon cap p minus value less than 0.0001 right parenthesis full stop\"><math mathsize=\"0.9em\" xmlns:m=\"http:\/\/www.w3.org\/1998\/Math\/MathML\" display=\"inline\" id=\"itkw3351e3f9132c4407239cfd3fda61\"><semantics id=\"jhhv8fcb71a8be9568a903d077287f45\"><mrow id=\"vfdy0607ffdd3f43977627d53aeba392\"><mo stretchy=\"false\" id=\"zmji433a3b1f2b2fd1e0889e4a2a0b80\">(<\/mo><mi id=\"hupu2747d52b37b2374b5914f4c00e20\">t<\/mi><mo id=\"seka0257cb2468f41afd1d67686a3a57\">=<\/mo><mn id=\"yblv0f87363b7d40b8984af0a1fdf954\">4.26<\/mn><mo lspace=\"0\" rspace=\"0\" id=\"nrgse4d26e651884a5417c55e5d97fcc\">;<\/mo><mtext id=\"zqns40eb4490322698d1f914fb53d3d3\">&nbsp;<\/mtext><mi id=\"liom3a02801f4097d38c199d871b281f\">P<\/mi><mtext id=\"ctdpa7263f92b1c788bd189d3293be25\">-value<\/mtext><mo id=\"voel51a9575f08d798439b20329b9662\">&lt;<\/mo><mn id=\"qelqe197ec89e396fb3df533a97f996f\">0.0001<\/mn><mo stretchy=\"false\" id=\"xoym826dd4bae0329a8fc30e1efc9706\">)<\/mo><mo lspace=\"0\" id=\"rrfxf57cf66d62bfb194ce8024659009\">.<\/mo><\/mrow><annotation-xml name=\"alternative-representation\" encoding=\"application\/xhtml+xml\" id=\"xkfmd1ebb13cf93820c6349a553d80fc\"><img alt=\"left parenthesis t equals 4.26 semicolon cap p minus value less than 0.0001 right parenthesis full stop\" id=\"vwpacdc09b07343666ff149afa232b98\" src=\"..\/..\/..\/..\/images\/alw_9781319272463_EM_ans_ch13EQ_0089.png\" \/><\/annotation-xml><\/semantics><\/math><\/span> The equation becomes <span class=\"math\" role=\"math\" tabindex=\"0\" id=\"alw_9781319272463_EM_ans_ch13EQ_0090.png\" aria-label=\"y hat equals 5.54049 minus 0.10164 Promotions minus 0.05969 Discount prefix plus of 0.000845625 times Discount super two full stop\"><math mathsize=\"0.9em\" xmlns=\"http:\/\/www.w3.org\/1998\/Math\/MathML\"><mover><mi>y<\/mi><mo>^<\/mo><\/mover><mo>=<\/mo><mn>5<\/mn><mo>.<\/mo><mn>54049<\/mn><mo>-<\/mo><mn>0<\/mn><mo>.<\/mo><mn>10164<\/mn><mi>Promotions<\/mi><mo>-<\/mo><mn>0<\/mn><mo>.<\/mo><mn>05969<\/mn><mi>Discount<\/mi><mo>+<\/mo><mn>0<\/mn><mo>.<\/mo><mn>000845625<\/mn><msup><mi>Discount<\/mi><mn>2<\/mn><\/msup><\/math><\/span> This model has an <span class=\"math\" role=\"math\" tabindex=\"0\" id=\"alw_9781319272463_EM_ans_ch13EQ_0091.png\" aria-label=\"cap r squared equals 0.6114 comma\"><math mathsize=\"0.9em\" xmlns:m=\"http:\/\/www.w3.org\/1998\/Math\/MathML\" display=\"inline\" id=\"iuyx54c7c48492778792a34e00f2cee5\"><semantics id=\"sumic100a4342aee40817be72f980b8a\"><mrow id=\"mbnyc90cfd4894de541221881d474ba5\"><msup id=\"gnkq6db4110e3acb873afc01ca3eea95\"><mi id=\"bfhm7e0f6b19db32724a387d72eeed7e\">R<\/mi><mn id=\"qzfo005c7d74648926bec4f55cb63a6f\">2<\/mn><\/msup><mo id=\"quead3f7febbffff7b00a06ae8de8a05\">=<\/mo><mn id=\"rlwb4b4f35322743e72ee7fb214f2fac\">0.6114<\/mn><mo lspace=\"0\" id=\"ypgce80e9baae64e3b37f3c3843a25e4\">,<\/mo><\/mrow><annotation-xml name=\"alternative-representation\" encoding=\"application\/xhtml+xml\" id=\"tfgt59934ad0504ddbf43ae27de0ba1f\"><img alt=\"cap r squared equals 0.6114 comma\" id=\"aypb1736d46be50f69726c28c846d870\" src=\"..\/..\/..\/..\/images\/alw_9781319272463_EM_ans_ch13EQ_0091.png\" \/><\/annotation-xml><\/semantics><\/math><\/span> which is somewhat better than the 56.62% for the model without the quadratic term. It is possible to leave out the quadratic term to simplify interpretation; otherwise, the model with this term seems to be best in terms of prediction.<\/p>"},"media":{"type":"no-media"},"question_stem_status":"2","question_generic_stem":"","question_prefix":"","question_seperator":"","question_number":""},"VersionNo":"0","DisplayQuestionId":"ECL3I82161","OriginalQuestionId":"ECL3I82161","IsDeleted":false,"SelectedOptions":null,"question_number":"","question_prefix":"","question_seperator":""}]}