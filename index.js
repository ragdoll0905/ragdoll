const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '저는 우수한 봇 입니다!' }, status: 'online' })
});


client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '돌틴' )

  {

    return message.reply('참 우수한사람');
  };
  
  if(message.content == '발파루크참전' )

  {

    return message.reply('https://cdn.discordapp.com/attachments/606471620802117632/751368178898173972/16e31e8997143091.png');
  };

  if(message.content == '노무현'){
    let img = 'https://cdn.discordapp.com/attachments/751302825778085907/751392197630230588/hqdefault.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('"MC무현 대 히트곡"')
      .setURL('https://www.youtube.com/watch?v=vYibVU6Wbas&feature=youtu.be')
      .setAuthor('"MC무현 대 히트곡"', img, 'https://www.youtube.com/watch?v=vYibVU6Wbas&feature=youtu.be')
      .setThumbnail(img)
      .addBlankField()
      .addField('MC무현 히트곡 정리', 'MC무현 - 봉하반점\nMC무현 - 작은것들을 위한 시\nMC무현 - K/DA(Tak/Jota)\nMC무현 - TT\nMC무현 - 금요일밤\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('from 우수한 봇', img)

  }



  if(message.content == '문재앙') {
    let img = 'https://cdn.discordapp.com/attachments/751302825778085907/751345991688519700/1586877520.jpeg';
    let embed = new Discord.RichEmbed()
      .setTitle('"MC재앙 대 히트곡"')
      .setURL('https://youtu.be/tZkREJ1buJs')
      .setAuthor('"MC재앙 대 히트곡"', img, 'https://youtu.be/tZkREJ1buJs')
      .setThumbnail(img)
      .addBlankField()
      .addField('MC재앙 히트곡 정리', 'MC재앙 - Counting Moon\nMC재앙 - 대재앙 문재인\nMC재앙 - 대통령 운지법 쓰신다\nMC재앙 - 청와대와 빨갱이\nMC재앙 - 도라에문의 노래\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('from 우수한 봇', img)

    message.channel.send(embed)
  } else if(message.content == '!랙돌') {
    let helpImg = 'https://cdn.discordapp.com/attachments/751302825778085907/751360803952656384/photo-1592652426510-21aa54446dda.png';
    let commandList = [
      {name: '!랙돌', desc: '명령어 도움'},
      {name: '돌틴', desc: '성 안드레아 병원 환자'},
      {name: '!청소 1~100', desc: '채팅 지우기'},
      {name: '!초대코드', desc: '해당 채널의 초대 코드 표기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('명령어', helpImg)
      .setColor('#b87c2e')
      .setFooter(`maker gaon`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
            
          });
        }) 
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);
