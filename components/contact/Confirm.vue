<template>
  <v-row justify="center" tag="section" align="center" class="confirm">
    <h2 class="text-center  my-4 confirm__title">
      <v-icon class="mr-1" color="black">mdi-email-check-outline</v-icon
      >お問い合わせ内容確認
    </h2>
    <v-col cols="12" sm="10" md="8" lg="6">
      <FadeIn>
        <v-card>
          <div class="confirm__text pa-4">
            <p>
              お問い合わせ内容はこちらで宜しいでしょうか？<br />よろしければ<span
                class="font-weight-bold"
                >「送信する」</span
              >ボタンを押して下さい。
            </p>
            <p>
              <v-icon color="#ff1493">mdi-alert-circle</v-icon
              ><span class="confirm__caution font-weight-bold"
                >下記のメールアドレスに返信しますので、今一度ご確認ください。</span
              ><br />入力間違いがありますと返信できない場合がありますのでご注意ください。
            </p>
          </div>
          <!-- googleフォームと連携 action=”url” target="dummy" 追加 -->
          <v-form
            ref="vform"
            target="dummy"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScq1mh70mKQJLgpWVyoZ3-XIGydpZJchbYsblUgKhzIeo2uAw/formResponse"
          >
            <v-card-text>
              <!-- googleフォームと連携 name="entry.xxxx"追加 -->
              <v-text-field
                :rules="[required, limit_length]"
                v-model="form.name"
                label="お名前"
                required
                prepend-inner-icon="mdi-account"
                class="my-5"
                readonly
                name="entry.1210533588"
              ></v-text-field>
              <!-- googleフォームと連携 name="entry.xxxx"追加 -->
              <v-text-field
                :rules="[required, emailRules]"
                v-model="form.email"
                label="メールアドレス"
                required
                prepend-inner-icon="mdi-email"
                name="entry.369018561"
                class="my-5"
                readonly
                hint="ご確認ください。"
                persistent-hint
              ></v-text-field>
              <!-- googleフォームと連携 name="entry.xxxx"追加 -->
              <v-textarea
                :rules="[required]"
                v-model="form.content"
                label="お問い合わせ内容"
                class="mt-10"
                outlined
                counter
                no-resize
                rows="7"
                required
                auto-grow
                prepend-inner-icon="mdi-comment"
                readonly
                name="entry.1655379305"
              ></v-textarea>
            </v-card-text>
            <v-card-actions class="confirm__actions">
              <v-btn @click="$router.go(-1)" plain class="confirm__btn--back "
                >戻る</v-btn
              >
              <v-btn
                @click="submit"
                x-large
                plain
                rounded
                block
                class="confirm__btn--submit"
                type="submit"
              >
                送信する
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </FadeIn>
      <!-- iframeタグを追加 target="dummy"-->
      <iframe name="dummy" style="display:none;"></iframe>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      // 各テキストボックスの値
      form: {
        name: "",
        email: "",
        content: ""
      },
      // path直接書きで確認画面にこれるので空メール阻止のためのバリテーション
      // router.jsでナビゲーションガードも設定している
      required: v => !!v || "必ず入力してください",
      limit_length: v =>
        (v && v.length <= 15) || "15文字以内で入力してください",
      emailRules: v =>
        /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/.test(
          v
        ) || "有効なアドレスを入力してください"
    };
  },
  created() {
    this.setQuery();
  },
  methods: {
    setQuery() {
      //渡ってきたクエリパラメータをローカルなデータ代入
      this.form.name = this.$route.query.name;
      this.form.email = this.$route.query.email;
      this.form.content = this.$route.query.content;
    },
    submit() {
      if (this.$refs.vform.validate()) {
        // すべてのバリデーションが通過したときのみ
        this.$router.push({ path: "/complete" });
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.confirm {
  padding: 15px 0 80px;
  background-color: #f6f6f6;
  &__title {
    width: 100%;
  }
  &__text {
    border: 2px solid #aaa;
    border-radius: 4px;
  }
  &__actions {
    align-items: flex-end;
    flex-direction: column;
  }
  &__btn {
    &--back {
      align-self: start;
      box-shadow: 0px 1px 5px #b5b6b6, -5px -5px 5px #fff;
      transition-duration: 0.2s;
      &:hover {
        box-shadow: 0 0 4px #babbbd, -2px -2px 4px #fff;
      }
    }
    &--submit {
      margin: 30px 0 52px;
      box-shadow: 0px 5px 10px #ccc, -6px -6px 10px #fff;
      transition-duration: 0.2s;
      position: relative;
      font-weight: bold;
      background-color: #eee;
      &::after {
        content: "";
        width: 11px;
        height: 11px;
        border-top: 4px solid #000000de;
        border-right: 4px solid #000000de;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 0.4;
        transition: transform 0.3s ease-out;
      }
      &:hover {
        box-shadow: 0 0 4px #babbbd, -2px -2px 4px #fff;
        &::after {
          transform: translateX(-2px) rotate(45deg);
          opacity: 0.6;
          animation: prompt 1.5s ease-in-out infinite;
        }
      }
    }
  }
}
@keyframes prompt {
  0% {
    transform: translateX(-1px) rotate(45deg);
  }
  50% {
    transform: translateX(4px) rotate(45deg);
  }
  100% {
    transform: translateX(-1px) rotate(45deg);
  }
}
.v-card__actions > .v-btn.confirm__btn--submit {
  padding-right: 23.1111111111px;
}
</style>
