import amqp from "amqplib/callback_api.js";

export async function connect() {
  amqp.connect("amqp://localhost:5672", (error, connection) => {
    if (error) {
      throw error;
    }
    createQueue(connection, "sales-confirmation", "product.topic");
    createQueue(connection, "product-stock-update", "product.topic");
    setTimeout(function () {
      connection.close();
    }, 500);
  });
}

function createQueue(connection, queue, topic) {
  connection.createChannel((error, channel) => {
    if (error) {
      throw error;
    }
    channel.assertExchange(topic, "topic", {
      durable: true,
    });
    channel.assertQueue(`${queue}.queue`, {
      durable: true,
    });
    channel.bindQueue(`${queue}.queue`, topic, `${queue}.routingKey`);
  });
}

export async function consumeMessage() {
  amqp.connect("amqp://localhost:5672", (error, connection) => {
    if (error) {
      throw error;
    }
    connection.createChannel((error, channel) => {
      if (error) {
        throw error;
      }
      channel.consume(
        "sales-confirmation.queue",
        (message) => {
          console.info(`Recieving message: ${message.content.toString()}`);
        },
        {
          noAck: true,
        }
      );
    });
  });
}

export function publishMessage(message) {
  amqp.connect("amqp://localhost:5672", (error, connection) => {
    if (error) {
      throw error;
    }
    connection.createChannel((error, channel) => {
      if (error) {
        throw error;
      }
      let jsonStringMessage = JSON.stringify(message);
      console.info(`Sending message: ${jsonStringMessage}`);
      channel.publish(
        "product.topic",
        "product-stock-update.routingKey",
        Buffer.from(jsonStringMessage)
      );
      console.log("Message sent successfully!");
    });
    setTimeout(function () {
      connection.close();
    }, 500);
  });
}
