import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        name,
        last_name,
        phone,
        course_type,
        email,
        reason,
        exam_type,
        date,
      } = req.body;

      // Create a transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_GMAIL_USER,
          pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
        },
      });

      // Email options
      const mailOptions = {
        from: email,

        to: process.env.NEXT_PUBLIC_GMAIL_USER,
        subject: `Nuevo usuario ${name}`,
        text: reason,
        attachments: [
          {
            filename: "image.jpg",
            path: "src/static/images/iconLogo.jpeg",
            cid: "unique@nodemailer.com",
          },
        ],
        html: `
              <div style="text-align: center;">
                <img src="cid:unique@nodemailer.com" style="display: block; margin: 0 auto; width: 250px; height: 250px;"/>
               </div>
               <h1>Un nuevo usuario quiere ser parte de la Familia SCL</h1>
                <p><strong>Nombre:</strong> ${name} ${last_name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Telefono:</strong> ${phone}</p>
               <p><strong>Tipo de curso:</strong> ${course_type}</p>
               <p><strong>Motivo:</strong> ${reason}</p>
               <p><strong>Tipo de Examen:</strong> ${exam_type}</p>
               <p><strong>Fecha de examen:</strong> ${date}</p>
               `,
      };

      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
